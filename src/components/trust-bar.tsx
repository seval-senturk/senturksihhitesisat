import { Award, Clock, Handshake, Users } from "lucide-react";

const trustPoints = [
  {
    title: "Yerel ve Güvenilir",
    description: "Orhangazi'de hizmet veriyoruz.",
    icon: Handshake,
  },
  {
    title: "Müşteri Memnuniyeti",
    description: "Memnuniyet odaklı çalışıyoruz.",
    icon: Users,
  },
  {
    title: "Kaliteli Malzeme",
    description: "Uzun ömürlü ve sağlam çözümler.",
    icon: Award,
  },
  {
    title: "Hızlı Servis",
    description: "Acil durumlarda hızlı müdahale.",
    icon: Clock,
  },
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Güven unsurları"
      className="bg-[#102a41] text-white"
      style={{ fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif" }}
    >
      <ul className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {trustPoints.map(({ title, description, icon: Icon }, index) => (
          <li key={title} className="relative flex items-center gap-4 px-5 py-7 sm:px-6 xl:px-8">
            <Icon aria-hidden="true" className="size-12 shrink-0" strokeWidth={1.6} />
            <div>
              <p className="text-[15px] leading-tight font-bold">{title}</p>
              <p className="mt-1 max-w-[11.5rem] text-[13px] leading-snug text-white/75">
                {description}
              </p>
            </div>
            {index < 3 ? (
              <span
                aria-hidden="true"
                className={
                  index === 2
                    ? "absolute inset-x-0 bottom-0 h-px bg-white/20 sm:hidden"
                    : "absolute inset-x-0 bottom-0 h-px bg-white/20 xl:hidden"
                }
              />
            ) : null}
            {index === 0 || index === 2 ? (
              <span aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-px bg-white/20 sm:block" />
            ) : null}
            {index === 1 ? (
              <span aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-px bg-white/20 xl:block" />
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
