export interface FooterLink {
  label: string;
  href: string;
  target?: "_blank";
}

export interface FooterData {
    logoUrl: string;
    quote: string;
    corporateSite: { label: string; url: string };
    infoLinks: FooterLink[];
    copyright: string;
}

const LOGO_URL_FOOTER = "/logo_remate.webp";

export const footer: FooterData = {
    logoUrl: LOGO_URL_FOOTER,
    quote:
      '"Nuestra misión es conectar a las personas con la tierra de forma segura, respetando siempre el legado natural de la Patagonia Insular."',
    corporateSite: { label: "Sitio Corporativo", url: "https://rematedeterrenos.cl" },
    
    infoLinks: [
      { label: "Términos y Condiciones", href: "https://www.rematedeterrenos.cl/terminos-y-condiciones", target: "_blank" },
      { label: "Política de Privacidad", href: "https://www.rematedeterrenos.cl/politica-de-privacidad", target: "_blank" },
    ],
    copyright: "© 2024 Remate de Terrenos Chiloé. Todos los derechos reservados.",
}