import Image from "next/image";
import { Phone } from "lucide-react";
import { images } from "@/config/images";
import { businessProfile } from "@/lib/site";

const whatsappUrl = `https://wa.me/${businessProfile.telephone.replace("+", "")}`;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.8.6.6-3.7-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4.2-.4a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4.1 5 5 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.2c-.1-.2-.3-.2-.6-.4z" />
    </svg>
  );
}

const buttonClass =
  "inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-[10px] px-5 text-[15px] font-semibold text-white transition-colors";

export function ContactCta() {
  return (
    <section
      id="iletisim"
      aria-labelledby="iletisim-baslik"
      className="scroll-mt-[4.5rem] bg-[#102133] text-white"
      style={{ fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(14rem,0.75fr)_minmax(18rem,22rem)] lg:gap-6 lg:py-8 xl:px-10">
        <div>
          <h2
            id="iletisim-baslik"
            className="text-[1.7rem] leading-[1.15] font-extrabold tracking-tight sm:text-[2rem]"
          >
            <span className="block">Tesisatla İlgili</span>
            <span className="block">Her İhtiyacınızda</span>
            <span className="block text-brand">Yanınızdayız!</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-[15px]">
            Keşif, bilgi ve fiyat teklifi için hemen arayın veya WhatsApp&apos;tan mesaj gönderin.
          </p>
        </div>

        <div className="relative mx-auto h-72 w-full max-w-[17rem] lg:h-64">
          <Image
            src={images.cta.plumber.src}
            alt={images.cta.plumber.alt}
            fill
            loading="lazy"
            sizes={images.cta.plumber.sizes}
            className="object-cover object-[center_20%]"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#102133] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#102133] to-transparent" />
        </div>

        <div className="flex w-full flex-col gap-3 lg:max-w-[22rem]">
          <a href={`tel:${businessProfile.telephone}`} className={`${buttonClass} bg-brand hover:bg-brand-dark`}>
            <Phone aria-hidden="true" className="size-5" strokeWidth={2.25} />
            {businessProfile.telephoneDisplay}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClass} bg-[#25c45a] hover:bg-[#1eae4e]`}
          >
            <WhatsAppIcon />
            WhatsApp&apos;tan Yazın
          </a>
          <p className="text-center text-[13px] whitespace-nowrap text-white/85">
            Orhangazi / Bursa ve çevresine hizmet veriyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
