export const navigation = [
  {
    label: 'محصولات',
    href: '/products/',
    children: [
      { label: 'GammaItsm', description: 'مدیریت خدمات فناوری اطلاعات و میز خدمت', href: '/products/gammaitsm/' },
      { label: 'ZED EAM', description: 'مدیریت دارایی‌های سازمانی', href: '/products/zed-eam/' },
      { label: 'Landa', description: 'حسابداری ابری برای کسب و کارهای کوچک و متوسط', href: '/products/landa/' },
      { label: 'Gamma.Kernel', description: 'چارچوب متن‌باز نرم‌افزارهای سازمانی مبتنی بر .NET', href: '/products/gamma-kernel/' },
    ],
  },
  {
    label: 'منابع',
    href: '/resources/',
    children: [
      { label: 'مقالات', description: 'دانش و دیدگاه‌های تخصصی', href: '/resources/articles/' },
      { label: 'ویدئوها', description: 'محتوای ویدئویی محصولات و فناوری', href: '/resources/videos/' },
      { label: 'راهنمای ITIL', description: 'منابع آموزشی مدیریت خدمات فناوری اطلاعات', href: '/resources/itil/' },
      { label: 'پرسشهای متداول', description: 'پاسخ پرسشهای رایج', href: '/resources/faq/' },
    ],
  },
  {
    label: 'شرکت',
    href: '/company/about/',
    children: [
      {
        label: 'درباره ما',
        description: 'آشنایی با دومان سامانه، تاریخچه و حوزه‌های فعالیت',
        href: '/company/about/',
      },
      {
        label: 'مشتریان',
        description: 'سازمان‌ها و کسب و کارهای استفاده‌کننده از راهکارهای ما',
        href: '/company/customers/',
      },
      {
        label: 'ماموریت و چشم‌انداز',
        description: 'نگاه، فلسفه و مسیر آینده دومان سامانه',
        href: '/company/mission/',
      },
      {
        label: 'چرا ما',
        description: 'تجربه، رویکرد و توانمندی‌های دومان سامانه',
        href: '/company/why-us/',
      },
      {
        label: 'گواهی‌نامه‌ها',
        description: 'گواهی‌نامه‌ها و تاییدیه‌های رسمی شرکت',
        href: '/company/certifications/',
      },
    ],
  },
  { label: 'تماس با ما', href: '/contact/' },
];
