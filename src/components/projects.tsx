import Image from "next/image";
import { images } from "@/config/images";

const projects = [
  images.projects.bathroomShower,
  images.projects.heatingManifold,
  images.projects.bathroomVanity,
  images.projects.gasMeter,
  images.projects.kitchenSink,
] as const;

export function Projects() {
  return (
    <section
      id="yaptigimiz-isler"
      aria-labelledby="yaptigimiz-isler-baslik"
      className="scroll-mt-[4.5rem] bg-white px-4 py-16 sm:px-6 lg:py-20 xl:px-10"
      style={{ fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2
              id="yaptigimiz-isler-baslik"
              className="text-[1.85rem] leading-none font-extrabold tracking-tight sm:text-[2.15rem]"
            >
              <span className="text-[#0c2340]">Yaptığımız </span>
              <span className="text-brand">İşlerden Bazıları</span>
            </h2>
            <span className="mt-3 block h-[3px] w-11 rounded-full bg-brand" aria-hidden="true" />
          </div>
          <p className="max-w-[32rem] text-[15px] leading-relaxed text-neutral-500 md:shrink-0 md:text-right">
            Gerçek projeler, gerçek sonuçlar.{" "}
            <span className="md:block">
              Orhangazi ve çevresinde birçok başarılı işe imza attık.
            </span>
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {projects.map((image) => (
            <li key={image.src}>
              <figure className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-[0_10px_24px_-14px_rgba(15,23,42,0.55)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes={image.sizes}
                  className="object-cover"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
