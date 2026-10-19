import Image from "next/image";
import { Bath, Droplet, Flame } from "lucide-react";
import { images } from "@/config/images";

const services = [
  {
    title: "Su Tesisatı",
    description: "Yeni tesisat kurulumu, arıza tespiti ve tamir hizmetleri.",
    image: images.services.waterInstallation,
    icon: Droplet,
  },
  {
    title: "Kalorifer Tesisatı",
    description: "Isıtma sistemleri kurulum, bakım ve onarım hizmetleri.",
    image: images.services.radiatorInstallation,
    icon: RadiatorIcon,
  },
  {
    title: "Doğalgaz Projesi",
    description: "Doğalgaz proje çizimi ve resmi işlemler için danışmanlık.",
    image: images.services.gasProject,
    icon: Flame,
  },
  {
    title: "Doğalgaz Tesisatı",
    description: "Doğalgaz iç tesisat kurulumu ve güvenli montaj hizmetleri.",
    image: images.services.gasInstallation,
    icon: PipeIcon,
  },
  {
    title: "Banyo Tadilatı",
    description: "Banyolarınızı modern, konforlu ve estetik hale getiriyoruz.",
    image: images.services.bathroomRenovation,
    icon: Bath,
  },
] as const;

function RadiatorIcon({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 6.5h16M4 17.5h16" />
      <path d="M7 6.5v11M10.5 6.5v11M14 6.5v11M17.5 6.5v11" />
    </svg>
  );
}

function PipeIcon({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
      <path d="M3 9.5h6v5H3z" />
      <path d="M9 12h2.5" />
      <path d="M11.5 8h6.2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H11.5" />
      <path d="M14.2 8v8" />
    </svg>
  );
}

export function Services() {
  return (
    <section
      id="hizmetlerimiz"
      aria-labelledby="hizmetlerimiz-baslik"
      className="scroll-mt-[4.5rem] bg-white px-4 py-16 sm:px-6 lg:py-20 xl:px-10"
      style={{ fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2
              id="hizmetlerimiz-baslik"
              className="text-[1.85rem] leading-none font-extrabold tracking-tight sm:text-[2.15rem]"
            >
              <span className="text-[#0c2340]">Hizmet</span>
              <span className="text-brand">lerimiz</span>
            </h2>
            <span className="mt-3 block h-[3px] w-11 rounded-full bg-brand" aria-hidden="true" />
          </div>
          <p className="max-w-[26rem] text-[15px] leading-relaxed text-neutral-500 md:text-right">
            Ev ve iş yerleriniz için tüm tesisat ihtiyaçlarınızda profesyonel çözümler sunuyoruz.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map(({ title, description, image, icon: Icon }) => (
            <li key={title} className="h-full min-w-0">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_10px_28px_-16px_rgba(15,23,42,0.35)]">
                <div className="relative">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={image.sizes}
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-4 flex size-12 translate-y-1/2 items-center justify-center rounded-xl border border-neutral-100 bg-white text-brand shadow-[0_6px_16px_-8px_rgba(15,23,42,0.45)]">
                    <Icon className="size-6" strokeWidth={2.1} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-4 pt-9 pb-5">
                  <h3 className="text-[15px] leading-snug font-bold text-[#0c2340]">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">{description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
