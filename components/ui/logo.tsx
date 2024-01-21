import Link from 'next/link';
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Ezgi">
      
      <div>
      <Image 
        src={"/images/logo.webp"}
        alt="Logo"
        width={1950}
        height={1250}
        className="w-48 h-16"
      />
      </div>
    </Link>
  )
};