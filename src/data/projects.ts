export type ProjectKind = "product" | "client-solution";
export type ProjectStatus = "live" | "development";

export interface ProjectBrand {
  authoritativeSource: string;
  version: string | null;
}

export interface Project {
  id: string;
  name: string;
  kind: ProjectKind;
  status: ProjectStatus;
  summary: string | null;
  website: string | null;
  featured: boolean;
  brand: ProjectBrand;
}

export const projects = [
  {
    id: "bank-g",
    name: "Bank G",
    kind: "product",
    status: "live",
    summary:
      "Gestión financiera para operaciones controladas, estructuradas y trazables.",
    website: null,
    featured: true,
    brand: {
      authoritativeSource:
        "MagicSystemsDev/bank-g — brand/visual-identity/v1.0",
      version: "1.0",
    },
  },
  {
    id: "black-rous",
    name: "Black Rous",
    kind: "client-solution",
    status: "development",
    summary:
      "Experiencia digital y catálogo para una marca de moda alternativa.",
    website: null,
    featured: true,
    brand: {
      authoritativeSource: "Identidad visual propiedad del cliente",
      version: null,
    },
  },
] as const satisfies ReadonlyArray<Project>;
