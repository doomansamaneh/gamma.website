import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const users = String(formData.get("users") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    // Honeypot ضد ربات‌ها
    const website = String(formData.get("website") ?? "").trim();

    if (website) {
      return new Response("OK", { status: 200 });
    }

    // فیلدهای اجباری
    if (!name || !organization || !phone) {
      return new Response(
        "لطفاً فیلدهای ضروری را تکمیل کنید.",
        { status: 400 }
      );
    }

    // اعتبارسنجی ایمیل در صورت وارد شدن
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        return new Response(
          "آدرس ایمیل واردشده معتبر نیست.",
          { status: 400 }
        );
      }
    }

    // اعتبارسنجی شماره تلفن
    const normalizedPhone = phone.replace(/[\s()-]/g, "");

    if (!/^[+]?\d{8,15}$/.test(normalizedPhone)) {
      return new Response(
        "شماره تماس واردشده معتبر نیست.",
        { status: 400 }
      );
    }

    // دریافت Secret از Cloudflare
    const apiKey = env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return new Response(
        "خطا در تنظیم سرویس ارسال ایمیل.",
        { status: 500 }
      );
    }

    const html = `
      <!DOCTYPE html>
      <html lang="fa" dir="rtl">
        <head>
          <meta charset="UTF-8" />
        </head>

        <body style="font-family:Tahoma,Arial,sans-serif;line-height:1.9;direction:rtl;">
          <h2>درخواست دموی اختصاصی Gamma ITSM</h2>

          <table style="border-collapse:collapse;width:100%;max-width:700px;">
            <tr>
              <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">
                نام و نام خانوادگی
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${escapeHtml(name)}
              </td>
            </tr>

            <tr>
              <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">
                نام سازمان
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${escapeHtml(organization)}
              </td>
            </tr>

            <tr>
              <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">
                شماره تماس
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${escapeHtml(phone)}
              </td>
            </tr>

            <tr>
              <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">
                ایمیل
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${email ? escapeHtml(email) : "-"}
              </td>
            </tr>

            <tr>
              <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">
                تعداد کاربران
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${users ? escapeHtml(users) : "-"}
              </td>
            </tr>

            <tr>
              <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">
                توضیحات یا نیازهای سازمان
              </td>
              <td style="padding:8px;border:1px solid #ddd;white-space:pre-line;">
                ${message ? escapeHtml(message) : "-"}
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },

      body: JSON.stringify({
        from: "Gamma ITSM Demo <onboarding@resend.dev>",
        to: ["gammadesk@gmail.com"],
        subject: `درخواست دموی اختصاصی Gamma ITSM - ${organization}`,
        html,
        ...(email ? { reply_to: email } : {}),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Resend error:", errorText);

      return new Response(
        "ارسال درخواست انجام نشد. لطفاً دوباره تلاش کنید.",
        { status: 500 }
      );
    }

    // ارسال موفق
    return redirect("/contact/demo/?success=1", 303);

  } catch (error) {
    console.error("Demo request error:", error);

    return new Response(
      "خطایی در ارسال درخواست رخ داد.",
      { status: 500 }
    );
  }
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}