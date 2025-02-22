import Image from "next/image";

export function Logo() {
  return (
    <Image
      className="dark:invert"
      src="/ufc_out.png"
      alt="UFC logo"
      width={360}
      height={75}
      priority
    />
  );
}
