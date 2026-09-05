export interface Product {
  name: string;
  slug: string;
  category: string;
  description: string;
  href: string;
  primary?: boolean;
}

export const products: Product[] = [
  {
    name: 'GammaDesk',
    slug: 'gammadesk',
    category: 'مدیریت خدمات فناوری اطلاعات سازمانی',
    description: 'سامانه مدیریت خدمات فناوری اطلاعات برای سازمان‌ها.',
    href: '/products/gammadesk/',
    primary: true,
  },
  {
    name: 'ZED EAM',
    slug: 'zed-eam',
    category: 'مدیریت دارایی سازمانی',
    description: 'پلتفرم مدیریت دارایی‌های سازمانی.',
    href: '/products/zed-eam/',
  },
  {
    name: 'Landa',
    slug: 'landa',
    category: 'حسابداری ابری',
    description: 'نرم‌افزار حسابداری ابری برای کسب و کارهای کوچک و متوسط.',
    href: '/products/landa/',
  },
  {
    name: 'Gamma.Kernel',
    slug: 'gamma-kernel',
    category: 'چارچوب توسعه نرم‌افزارهای سازمانی مبتنی بر .NET',
    description: 'هسته و چارچوب متن‌باز دومان سامانه برای توسعه نرم‌افزارهای سازمانی مبتنی بر .NET.',
    href: '/products/gamma-kernel/',
  },
];
