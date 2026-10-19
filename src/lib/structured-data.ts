import {
  businessProfile,
  hasLocalBusinessFacts,
  siteConfig,
  type BusinessProfile,
} from "@/lib/site";

export type JsonLd = Record<string, unknown>;

function plumberNode(profile: BusinessProfile): JsonLd {
  const address: JsonLd = {
    "@type": "PostalAddress",
    addressLocality: profile.addressLocality.trim(),
    addressCountry: profile.addressCountry,
  };

  if (profile.streetAddress.trim()) {
    address.streetAddress = profile.streetAddress.trim();
  }

  if (profile.addressRegion.trim()) {
    address.addressRegion = profile.addressRegion.trim();
  }

  if (profile.postalCode.trim()) {
    address.postalCode = profile.postalCode.trim();
  }

  const plumber: JsonLd = {
    "@type": "Plumber",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: profile.telephone.trim(),
    address,
  };

  if (profile.areaServed.length > 0) {
    plumber.areaServed = profile.areaServed;
  }

  if (profile.email.trim()) {
    plumber.email = profile.email.trim();
  }

  const latitude = Number(profile.latitude);
  const longitude = Number(profile.longitude);
  if (
    profile.latitude.trim() !== "" &&
    profile.longitude.trim() !== "" &&
    Number.isFinite(latitude) &&
    Number.isFinite(longitude)
  ) {
    plumber.geo = {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    };
  }

  if (profile.openingHours.length > 0) {
    plumber.openingHours = profile.openingHours;
  }

  if (profile.sameAs.length > 0) {
    plumber.sameAs = profile.sameAs;
  }

  return plumber;
}

export function getStructuredData(): JsonLd {
  const graph: JsonLd[] = [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: siteConfig.language,
      description: siteConfig.description,
    },
  ];

  if (hasLocalBusinessFacts(businessProfile)) {
    graph.push(plumberNode(businessProfile));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
