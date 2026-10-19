"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { BrandLogo } from "@/components/logo";
import { pageSections } from "@/lib/navigation";
import { businessProfile } from "@/lib/site";

const desktopNavClass =
  "hidden w-max items-center gap-6 text-[15px] font-medium whitespace-nowrap text-[#4f4f4f] lg:flex";
const desktopLinkClass =
  "rounded-sm px-0.5 py-2 whitespace-nowrap transition-colors hover:text-brand";
const phoneClass =
  "inline-flex h-10 shrink-0 items-center gap-2 rounded-[10px] bg-brand px-3.5 text-[13px] font-semibold tracking-wide whitespace-nowrap text-white transition-colors hover:bg-brand-dark sm:h-12 sm:gap-2.5 sm:px-4 sm:text-[15px]";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    function closeOnDesktop() {
      if (media.matches) {
        setOpen(false);
      }
    }

    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
    }
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      className="site-header sticky top-0 z-50 h-[4.5rem] border-b border-[#f0f0f0] bg-white"
      style={{ fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif" }}
    >
      <a
        href="#anasayfa"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-10 focus:bg-white focus:px-3 focus:py-2"
      >
        İçeriğe geç
      </a>
      <div className="h-full px-4 sm:px-6 xl:px-10">
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between gap-3">
        <a href="#anasayfa" className="rounded-sm" onClick={closeMenu}>
          <BrandLogo />
        </a>

        <nav
          aria-label="Sayfa bölümleri"
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${desktopNavClass}`}
        >
          {pageSections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className={desktopLinkClass}>
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <a href={`tel:${businessProfile.telephone}`} className={phoneClass}>
            <Phone aria-hidden="true" className="size-4 sm:size-[18px]" strokeWidth={2.25} />
            {businessProfile.telephoneDisplay}
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-[#333] lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? (
              <X aria-hidden="true" className="size-6" />
            ) : (
              <Menu aria-hidden="true" className="size-6" />
            )}
            <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
          </button>
        </div>

      <nav
        id={menuId}
        aria-label="Mobil sayfa bölümleri"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-[#f0f0f0] bg-white shadow-sm lg:hidden"
      >
        <ul className="flex flex-col py-2">
          {pageSections.map((section, index) => (
            <li key={section.id}>
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                href={`#${section.id}`}
                className="block rounded-sm py-3 text-base font-medium text-[#4f4f4f] hover:text-brand"
                onClick={closeMenu}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
      </div>
    </header>
  );
}
