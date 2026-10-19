import { MapPin, MessageSquare, Phone } from "lucide-react";
import { BrandLogo } from "@/components/logo";
import { businessProfile } from "@/lib/site";

const place = `${businessProfile.addressLocality}, ${businessProfile.addressRegion}`;
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(place)}&hl=tr&z=13&output=embed`;

export function Footer() {
  return (
    <footer
      className="border-t border-[#f0f0f0] bg-white"
      style={{ fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[auto_auto_minmax(16rem,22rem)] lg:justify-between lg:gap-x-16 xl:px-10">
        <a href="#anasayfa" className="w-fit rounded-sm">
          <BrandLogo size="footer" />
        </a>

        <section aria-labelledby="footer-iletisim" className="text-[#1c3d5a]">
          <h2 id="footer-iletisim" className="text-[15px] font-semibold">
            İletişim Bilgileri
          </h2>
          <ul className="mt-4 space-y-3 text-[15px] font-medium">
            <li>
              <a
                href={`tel:${businessProfile.telephone}`}
                className="inline-flex items-center gap-3 rounded-sm"
              >
                <Phone aria-hidden="true" className="size-[18px] shrink-0" strokeWidth={1.75} />
                {businessProfile.telephoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin aria-hidden="true" className="size-[18px] shrink-0" strokeWidth={1.75} />
              {businessProfile.addressLocality} / {businessProfile.addressRegion}
            </li>
            <li className="flex items-center gap-3">
              <MessageSquare aria-hidden="true" className="size-[18px] shrink-0" strokeWidth={1.75} />
              Detaylı bilgi için arayın.
            </li>
          </ul>
        </section>

        <section aria-labelledby="footer-harita" className="w-full">
          <h2 id="footer-harita" className="text-[15px] font-semibold text-[#1c3d5a]">
            Bizi Haritada Bulun
          </h2>
          <div className="relative mt-4 h-28 overflow-hidden rounded-xl border border-neutral-200">
            <iframe
              title="Orhangazi, Bursa haritası"
              src={mapsEmbed}
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 border-0"
            />
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            >
              <span className="pointer-events-none absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-[0_6px_16px_-8px_rgba(15,23,42,0.45)]">
                <MapPin aria-hidden="true" className="size-7 fill-brand text-brand" strokeWidth={1.75} />
                <span className="leading-tight text-[#1c3d5a]">
                  <span className="block text-sm font-bold">{businessProfile.addressLocality}</span>
                  <span className="block text-xs font-medium text-[#5c6770]">
                    {businessProfile.addressRegion}
                  </span>
                </span>
              </span>
              <span className="sr-only"> konumunu Google Haritalar&apos;da aç</span>
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}
