export type BusinessProfile = {
  telephone: string;
  email: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  latitude: string;
  longitude: string;
  openingHours: readonly string[];
  areaServed: readonly string[];
  sameAs: readonly string[];
};

function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  const normalized = raw.replace(/\/+$/, "");

  let url: URL;
  try {
    url = new URL(normalized);
  } catch {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute http(s) URL.");
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use http or https.");
  }

  return url.origin;
}

export const siteConfig = {
  name: "Şentürk Sıhhi Tesisat",
  description:
    "Şentürk Sıhhi Tesisat resmi tanıtım sitesi. Hizmet bölgesi ve iletişim bilgileri eklendikten sonra güncellenecek.",
  url: getSiteUrl(),
  locale: "tr_TR",
  language: "tr",
  /**
   * Keep false until the public page and verified business details are ready.
   * This blocks indexing of the infrastructure placeholder.
   */
  indexable: false,
} as const;

/**
 * Public contact facts for local SEO. Leave unknown values empty.
 * Incomplete name/address/phone data is not published as structured data.
 */
export const businessProfile: BusinessProfile = {
  telephone: "",
  email: "",
  streetAddress: "",
  addressLocality: "",
  addressRegion: "",
  postalCode: "",
  addressCountry: "TR",
  latitude: "",
  longitude: "",
  openingHours: [],
  areaServed: [],
  sameAs: [],
};

export function hasLocalBusinessFacts(profile: BusinessProfile): boolean {
  return (
    profile.telephone.trim() !== "" &&
    profile.streetAddress.trim() !== "" &&
    profile.addressLocality.trim() !== ""
  );
}
