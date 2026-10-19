export const pageSections = [
  { id: "anasayfa", label: "Ana Sayfa" },
  { id: "hizmetlerimiz", label: "Hizmetlerimiz" },
  { id: "neden-biz", label: "Neden Biz?" },
  { id: "yaptigimiz-isler", label: "Yaptığımız İşler" },
  { id: "iletisim", label: "İletişim" },
] as const;

export type PageSection = (typeof pageSections)[number];
