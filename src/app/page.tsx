import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { TrustBar } from "@/components/trust-bar";
import { pageSections } from "@/lib/navigation";

export default function Home() {
  return (
    <main>
      {pageSections.map((section) => {
        if (section.id === "anasayfa") {
          return <Hero key={section.id} />;
        }

        if (section.id === "hizmetlerimiz") {
          return (
            <div key={section.id}>
              <Services />
              <TrustBar />
            </div>
          );
        }

        if (section.id === "yaptigimiz-isler") {
          return <Projects key={section.id} />;
        }

        if (section.id === "iletisim") {
          return <ContactCta key={section.id} />;
        }

        const headingId = `${section.id}-baslik`;

        return (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={headingId}
            className="scroll-mt-[4.5rem] px-4 py-14 sm:px-6 xl:px-10"
          >
            <div className="mx-auto max-w-7xl">
              <h2
                id={headingId}
                className="text-2xl font-semibold tracking-tight text-neutral-950"
              >
                {section.label}
              </h2>
            </div>
          </section>
        );
      })}
    </main>
  );
}
