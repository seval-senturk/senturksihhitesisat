"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { images } from "@/config/images";

const projects = [
  images.projects.bathroomShower,
  images.projects.heatingManifold,
  images.projects.bathroomVanity,
  images.projects.gasMeter,
  images.projects.kitchenSink,
] as const;

export function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const active = activeIndex === null ? null : projects[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (active) {
      if (!dialog.open) dialog.showModal();
      closeRef.current?.focus();
      return;
    }

    if (dialog.open) dialog.close();
  }, [active]);

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
          {projects.map((image, index) => (
            <li key={image.src} className="min-w-0">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`${image.alt}. Büyük görüntüle`}
                className="relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-xl shadow-[0_10px_24px_-14px_rgba(15,23,42,0.55)]"
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  loading="lazy"
                  quality={100}
                  sizes={image.sizes}
                  className="object-cover object-center"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={active?.alt ?? "Proje görseli"}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-[#0c2340]/80"
        onClose={() => setActiveIndex(null)}
        onClick={() => setActiveIndex(null)}
      >
        {active ? (
          <div className="flex h-full w-full items-center justify-center p-4 sm:p-10">
            <div
              className="relative h-[85dvh] w-[min(92vw,1100px)]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                quality={100}
                sizes="(min-width: 1024px) 1100px, 92vw"
                className="object-contain object-center"
              />
              <button
                ref={closeRef}
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Görseli kapat"
                className="fixed top-4 right-4 flex size-11 cursor-pointer items-center justify-center rounded-full bg-white text-[#0c2340] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
