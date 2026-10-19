export type BusinessProfile = {
  telephone: string;
  telephoneDisplay: string;
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

const telephoneDisplay = "0542 401 79 04";

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
  title: "Şentürk Sıhhi Tesisat | Orhangazi, Bursa",
  description: `Şentürk Sıhhi Tesisat, Orhangazi ve Bursa'da sıhhi tesisat hizmeti verir. İletişim: ${telephoneDisplay}.`,
  url: getSiteUrl(),
  locale: "tr_TR",
  language: "tr",
  /**
   * The page is still a structural shell. Keep this false until the
   * production domain and the remaining public sections are ready.
   */
  indexable: false,
} as const;

/**
 * Confirmed public facts only. Street, postal code, coordinates, hours,
 * and profiles stay empty until they are verified.
 */
export const businessProfile: BusinessProfile = {
  telephone: "+905424017904",
  telephoneDisplay,
  email: "",
  streetAddress: "",
  addressLocality: "Orhangazi",
  addressRegion: "Bursa",
  postalCode: "",
  addressCountry: "TR",
  latitude: "",
  longitude: "",
  openingHours: [],
  areaServed: ["Orhangazi", "Bursa"],
  sameAs: [],
};

export function hasLocalBusinessFacts(profile: BusinessProfile): boolean {
  return profile.telephone.trim() !== "" && profile.addressLocality.trim() !== "";
}
