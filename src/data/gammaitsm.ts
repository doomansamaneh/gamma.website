export interface GammaItsmFeature {
  name: string;
  slug: string;
  description: string;
  group: string;
}

export interface GammaItsmCapabilityGroup {
  name: string;
  slug: string;
  description: string;
  features: GammaItsmFeature[];
}

export const GammaItsmCapabilityGroups: GammaItsmCapabilityGroup[] = [
  {
    name: 'مدیریت خدمات',
    slug: 'service-management',
    description: 'فرایندهای اصلی مدیریت خدمات فناوری اطلاعات.',
    features: [
      { name: 'مدیریت رخداد', slug: 'incident-management', description: 'سامان‌دهی فرایند مدیریت رخداد.', group: 'مدیریت خدمات' },
      { name: 'مدیریت درخواست خدمت', slug: 'service-request-management', description: 'مدیریت درخواست‌های خدمت در سازمان.', group: 'مدیریت خدمات' },
      { name: 'مدیریت مشکل', slug: 'problem-management', description: 'پشتیبانی از فرایند مدیریت مشکل.', group: 'مدیریت خدمات' },
      { name: 'مدیریت تغییر', slug: 'change-management', description: 'پشتیبانی از فرایند مدیریت تغییر.', group: 'مدیریت خدمات' },
      { name: 'کاتالوگ خدمات', slug: 'service-catalog', description: 'ساختاردهی خدمات قابل ارائه.', group: 'مدیریت خدمات' },
      { name: 'مدیریت دانش', slug: 'knowledge-management', description: 'مدیریت محتوای دانش مرتبط با خدمات.', group: 'مدیریت خدمات' },
    ],
  },
  {
    name: 'SLA و سطح خدمت',
    slug: 'sla',
    description: 'قابلیت‌های مرتبط با سطح خدمت و پایش آن.',
    features: [
      { name: 'مدیریت SLA', slug: 'sla-management', description: 'مدیریت توافق‌های سطح خدمت.', group: 'SLA و سطح خدمت' },
      { name: 'پایش سطح خدمت', slug: 'service-level-monitoring', description: 'پایش وضعیت سطح خدمت.', group: 'SLA و سطح خدمت' },
      { name: 'تشدید', slug: 'escalation', description: 'پشتیبانی از فرایند تشدید موارد.', group: 'SLA و سطح خدمت' },
      { name: 'عملکرد خدمت', slug: 'service-performance', description: 'نمایش و بررسی عملکرد خدمت.', group: 'SLA و سطح خدمت' },
    ],
  },
  {
    name: 'گردش کار و خودکارسازی',
    slug: 'workflow',
    description: 'ابزارهای تعریف گردش کار و قواعد عملیاتی.',
    features: [
      { name: 'گردش کار', slug: 'workflow', description: 'تعریف و مدیریت گردش کار.', group: 'گردش کار و خودکارسازی' },
      { name: 'قواعد کسب و کار', slug: 'business-rules', description: 'مدیریت قواعد کسب و کار.', group: 'گردش کار و خودکارسازی' },
      { name: 'اعلان‌ها', slug: 'notifications', description: 'مدیریت اعلان‌های مرتبط با فرایندها.', group: 'گردش کار و خودکارسازی' },
      { name: 'تایید', slug: 'approval', description: 'پشتیبانی از فرایند تایید.', group: 'گردش کار و خودکارسازی' },
    ],
  },
  {
    name: 'دارایی و پیکربندی',
    slug: 'asset-configuration',
    description: 'مدیریت دارایی‌ها، پیکربندی و ارتباطات آن‌ها.',
    features: [
      { name: 'مدیریت دارایی', slug: 'asset-management', description: 'مدیریت اطلاعات دارایی‌ها.', group: 'دارایی و پیکربندی' },
      { name: 'مدیریت پیکربندی', slug: 'configuration-management', description: 'مدیریت اطلاعات پیکربندی.', group: 'دارایی و پیکربندی' },
      { name: 'CMDB', slug: 'cmdb', description: 'ساختاردهی اطلاعات اقلام پیکربندی.', group: 'دارایی و پیکربندی' },
      { name: 'ارتباطات', slug: 'relationships', description: 'نمایش ارتباط میان اقلام مرتبط.', group: 'دارایی و پیکربندی' },
    ],
  },
  {
    name: 'سازمان و دسترسی',
    slug: 'organization-access',
    description: 'مدیریت کاربران، سازمان‌ها و دسترسی‌ها.',
    features: [
      { name: 'کاربران', slug: 'users', description: 'مدیریت کاربران سامانه.', group: 'سازمان و دسترسی' },
      { name: 'سازمان‌ها', slug: 'organizations', description: 'مدیریت ساختار سازمانی.', group: 'سازمان و دسترسی' },
      { name: 'نقش‌ها و مجوزها', slug: 'roles-permissions', description: 'مدیریت نقش‌ها و مجوزهای دسترسی.', group: 'سازمان و دسترسی' },
      { name: 'دپارتمان‌ها', slug: 'departments', description: 'مدیریت دپارتمان‌های سازمان.', group: 'سازمان و دسترسی' },
    ],
  },
  {
    name: 'گزارش و داشبورد',
    slug: 'reporting',
    description: 'نمایش اطلاعات عملیاتی و مدیریتی.',
    features: [
      { name: 'داشبوردها', slug: 'dashboards', description: 'نمایش اطلاعات در داشبوردها.', group: 'گزارش و داشبورد' },
      { name: 'گزارش‌ها', slug: 'reports', description: 'ارائه گزارش‌های سامانه.', group: 'گزارش و داشبورد' },
      { name: 'KPI', slug: 'kpi', description: 'نمایش شاخص‌های کلیدی عملکرد.', group: 'گزارش و داشبورد' },
      { name: 'گزارش عملیاتی', slug: 'operational-reporting', description: 'گزارش‌دهی درباره عملیات.', group: 'گزارش و داشبورد' },
      { name: 'گزارش مدیریتی', slug: 'management-reporting', description: 'گزارش‌دهی برای تصمیم‌گیری مدیریتی.', group: 'گزارش و داشبورد' },
    ],
  },
  {
    name: 'پرتال و تعامل',
    slug: 'portal',
    description: 'مسیرهای تعامل کاربران با خدمات فناوری اطلاعات.',
    features: [
      { name: 'پرتال سلف‌سرویس', slug: 'self-service-portal', description: 'ارائه مسیر سلف‌سرویس به کاربران.', group: 'پرتال و تعامل' },
      { name: 'ثبت درخواست', slug: 'request-registration', description: 'ثبت درخواست‌های کاربران.', group: 'پرتال و تعامل' },
      { name: 'کانال‌های ارتباطی', slug: 'communication-channels', description: 'مدیریت کانال‌های ارتباطی.', group: 'پرتال و تعامل' },
    ],
  },
  {
    name: 'یکپارچه‌سازی',
    slug: 'integration',
    description: 'نقاط اتصال GammaItsm با سامانه‌های دیگر.',
    features: [
      { name: 'API', slug: 'api', description: 'رابط برنامه‌نویسی کاربردی محصول.', group: 'یکپارچه‌سازی' },
      { name: 'ایمیل', slug: 'email', description: 'ارتباط از طریق ایمیل.', group: 'یکپارچه‌سازی' },
      { name: 'سرویس‌های دایرکتوری', slug: 'directory-services', description: 'ارتباط با سرویس‌های دایرکتوری.', group: 'یکپارچه‌سازی' },
      { name: 'سیستم‌های خارجی', slug: 'external-systems', description: 'ارتباط با سیستم‌های خارجی.', group: 'یکپارچه‌سازی' },
    ],
  },
];

export const GammaItsmFeatures = GammaItsmCapabilityGroups.flatMap((group) => group.features);