export interface SiteConfig {
  name: string;
  defaultTitle: string;
  defaultDescription: string;
  language: "es";
  siteUrl: string | null;
  repositoryUrl: string;
  socialLinks: ReadonlyArray<string>;
  contactEmail: string | null;
}

export const siteConfig = {
  name: "Magic Systems",
  defaultTitle: "Magic Systems — Understand first. Build what matters.",
  defaultDescription:
    "Creamos productos de software y soluciones diseñadas alrededor de necesidades reales.",
  language: "es",
  siteUrl: null,
  repositoryUrl: "https://github.com/MagicSystemsDev/magic-systems-web",
  socialLinks: [],
  contactEmail: null,
} as const satisfies SiteConfig;
