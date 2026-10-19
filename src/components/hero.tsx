import Image from "next/image";
import { BadgeCheck, Clock, MapPin, Phone, ShieldCheck, Users, Wrench } from "lucide-react";
import { images } from "@/config/images";
import { businessProfile } from "@/lib/site";

const whatsappUrl = `https://wa.me/${businessProfile.telephone.replace("+", "")}`;

const trustItems = [
  { label: "Uzman Ekip", icon: Users },
  { label: "Kaliteli İşçilik", icon: BadgeCheck },
  { label: "Zamanında Teslim", icon: Clock },
  { label: "Garantili Hizmet", icon: ShieldCheck },
] as const;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.8.6.6-3.7-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4.2-.4a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4.1 5 5 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.2c-.1-.2-.3-.2-.6-.4z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="anasayfa"
      aria-labelledby="anasayfa-baslik"
      className="relative scroll-mt-[4.5rem] overflow-hidden bg-[#07182f] text-white"
      style={{ fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:py-16 xl:px-10">
        <div className="mx-auto max-w-7xl">
        <div className="max-w-[40rem]">
          <p className="flex items-center gap-2 text-sm font-medium text-white/90">
            <MapPin aria-hidden="true" className="size-4 text-brand" />
            Orhangazi / Bursa
          </p>
          <h1
            id="anasayfa-baslik"
            className="mt-4 text-[1.7rem] leading-[1.12] font-extrabold tracking-tight sm:text-[2.15rem] lg:text-[2.45rem]"
          >
            <span className="block">Su Tesisatı, Doğalgaz</span>
            <span className="block">Tesisatı ve Banyo Tadilatında</span>
            <span className="mt-1 block text-brand">Güvenilir Çözüm Ortağınız</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Şentürk Sıhhi Tesisat olarak Orhangazi ve çevresinde profesyonel, kaliteli ve
            garantili tesisat çözümleri sunuyoruz.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${businessProfile.telephone}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-brand px-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <Phone aria-hidden="true" className="size-5" />
              {businessProfile.telephoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-[#25c45a] px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1eae4e]"
            >
              <WhatsAppIcon />
              WhatsApp&apos;tan Yazın
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-3 text-[13px] lg:flex lg:flex-nowrap lg:gap-x-4">
            {trustItems.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2 whitespace-nowrap text-white/90">
                <Icon aria-hidden="true" className="size-5 shrink-0 text-white/80" />
                {label}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>

      <div className="relative h-80 sm:h-[420px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[44%]">
          <Image
            src={images.hero.plumber.src}
            alt={images.hero.plumber.alt}
            fill
            priority={images.hero.plumber.priority}
            sizes={images.hero.plumber.sizes}
            className="object-cover object-[center_20%]"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#07182f] to-transparent lg:block" />
          <div className="absolute right-3 bottom-3 flex max-w-[16rem] items-center gap-3 rounded-2xl bg-white px-3.5 py-3 text-neutral-800 shadow-lg sm:right-5 sm:bottom-5">
            <Wrench aria-hidden="true" className="size-9 shrink-0 text-brand" strokeWidth={2.25} />
            <p className="leading-tight">
              <span className="block text-[10px] font-semibold tracking-wide text-neutral-500 sm:text-[11px]">
                ORHANGAZİ&apos;DE
              </span>
              <span className="block text-[10px] font-semibold tracking-wide text-neutral-500 sm:text-[11px]">
                GÜVENİLİR TESİSATÇINIZ
              </span>
              <span className="mt-0.5 block text-sm font-extrabold text-brand">OKAN ŞENTÜRK</span>
            </p>
          </div>
        </div>
    </section>
  );
}
