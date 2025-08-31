import Image from "next/image";

export default function Header() {
  return (
    <header className='flex items-center justify-center h-[200px] bg-[#0D0D0D]'>
      <Image src='/logo.svg' alt='logo' width={226} height={48} />
    </header>
  );
}
