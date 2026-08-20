export interface SiteConfig {
  name: string;
  defaultTitle: string;
  defaultDescription: string;
  language: "es";
  siteUrl: string | null;
  repositoryUrl: string;
  founder: {
    name: string;
    role: string;
    url: string | null;
  };
  contact: {
    email: string | null;
    linkedin: string | null;
    github: string | null;
  };
}

export interface NavigationItem {
  label: string;
  href: `#${string}`;
  showInHeader: boolean;
  emphasis?: boolean;
}

export const navigation = [
  { label: "Qué hacemos", href: "#que-hacemos", showInHeader: true },
  { label: "Proyectos", href: "#proyectos", showInHeader: true },
  { label: "Cómo trabajamos", href: "#como-trabajamos", showInHeader: false },
  { label: "Tecnología", href: "#tecnologia", showInHeader: false },
  { label: "Nosotros", href: "#nosotros", showInHeader: true },
  {
    label: "Hablemos",
    href: "#contacto",
    showInHeader: true,
    emphasis: true,
  },
] as const satisfies ReadonlyArray<NavigationItem>;

export const withBasePath = (path: string): string =>
  `${import.meta.env.BASE_URL.replace(/\/?$/, "/")}${path.replace(/^\/+/, "")}`;

export const siteConfig = {
  name: "Magic Systems",
  defaultTitle: "Magic Systems — Software construido con intención",
  defaultDescription:
    "Magic Systems crea productos de software y soluciones diseñadas alrededor de necesidades reales.",
  language: "es",
  siteUrl: "https://magicsystemsdev.github.io/magic-systems-web/",
  repositoryUrl: "https://github.com/MagicSystemsDev/magic-systems-web",
  founder: {
    name: "Pedro Guale",
    role: "Software Developer",
    url: "https://pguale.github.io/about-me/",
  },
  contact: {
    email: "pedro_guale@outlook.com",
    linkedin: null,
    github: null,
  },
} as const satisfies SiteConfig;
