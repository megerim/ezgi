import Link from 'next/link';
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Ezgi">
      
      <div>
      <Image 
        src={"/images/logo.webp"}
        alt="Logo"
        width={320}
        height={128}
        className="w-40 h-16"
      />
      </div>
    </Link>
  )
};