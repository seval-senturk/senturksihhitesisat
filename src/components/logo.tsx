import Image from "next/image";
import { images } from "@/config/images";

export function BrandLogo({ size = "header" }: { size?: "header" | "footer" }) {
  const footer = size === "footer";
  const logo = images.branding.logo;

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      unoptimized
      className={footer ? "h-16 w-auto" : "h-10 w-auto sm:h-12"}
    />
  );
}
