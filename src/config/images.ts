/**
 * Site images live under public/images.
 * Replacing a file at the same path updates the site without a code change.
 * Rename a file or add a new one by updating the matching entry here.
 */

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
};

const cardSizes = "(min-width: 1280px) 240px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

export const images = {
  branding: {
    logo: {
      src: "/images/branding/logo.png",
      alt: "Şentürk Sıhhi Tesisat",
      width: 899,
      height: 243,
    },
  },
  hero: {
    plumber: {
      src: "/images/hero/hero-plumber.webp",
      alt: "Lavabo altındaki su tesisatını tamir eden tesisatçı",
      width: 864,
      height: 1152,
      sizes: "(min-width: 1024px) 46vw, 100vw",
      priority: true,
    },
  },
  services: {
    waterInstallation: {
      src: "/images/services/service-water-installation.webp",
      alt: "Beyaz lavaboya su akıtan krom musluk",
      width: 1152,
      height: 864,
      sizes: cardSizes,
    },
    radiatorInstallation: {
      src: "/images/services/service-radiator-installation.webp",
      alt: "Açık renk duvara monte edilmiş panel kalorifer",
      width: 1152,
      height: 864,
      sizes: cardSizes,
    },
    gasProject: {
      src: "/images/services/service-gas-project.webp",
      alt: "Mavi alevle yanan doğalgaz ocağı",
      width: 1152,
      height: 864,
      sizes: cardSizes,
    },
    gasInstallation: {
      src: "/images/services/service-gas-installation.webp",
      alt: "Sarı vana ve siyah borulardan oluşan doğalgaz bağlantısı",
      width: 1152,
      height: 864,
      sizes: cardSizes,
    },
    bathroomRenovation: {
      src: "/images/services/service-bathroom-renovation.webp",
      alt: "Beyaz lavabo, yuvarlak ayna ve cam duşakabinli banyo",
      width: 1152,
      height: 864,
      sizes: cardSizes,
    },
  },
  projects: {
    bathroomShower: {
      src: "/images/projects/project-bathroom-shower.webp",
      alt: "Cam duşakabin ve beyaz klozet bulunan modern banyo",
      width: 864,
      height: 1152,
      sizes: cardSizes,
    },
    heatingManifold: {
      src: "/images/projects/project-heating-manifold.webp",
      alt: "Panel kalorifer ve kırmızı-mavi borulu yerden ısıtma kolektörü",
      width: 864,
      height: 1152,
      sizes: cardSizes,
    },
    bathroomVanity: {
      src: "/images/projects/project-bathroom-vanity.webp",
      alt: "Ahşap dolap, beyaz lavabo ve büyük aynalı modern banyo",
      width: 864,
      height: 1152,
      sizes: cardSizes,
    },
    gasMeter: {
      src: "/images/projects/project-gas-meter.webp",
      alt: "Sarı doğalgaz borusu ve duvara monte edilmiş sayaç",
      width: 864,
      height: 1152,
      sizes: cardSizes,
    },
    kitchenSink: {
      src: "/images/projects/project-kitchen-sink.webp",
      alt: "Krom musluklu paslanmaz mutfak evyesi",
      width: 864,
      height: 1152,
      sizes: cardSizes,
    },
  },
  cta: {
    plumber: {
      src: "/images/cta/cta-plumber.webp",
      alt: "Cebinde tesisat anahtarları bulunan, lacivert tulumlu tesisatçı",
      width: 864,
      height: 1152,
      sizes: "(min-width: 1024px) 280px, 70vw",
    },
  },
} as const satisfies {
  branding: { logo: SiteImage };
  hero: { plumber: SiteImage };
  services: Record<string, SiteImage>;
  projects: Record<string, SiteImage>;
  cta: { plumber: SiteImage };
};
