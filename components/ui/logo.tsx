import Link from 'next/link';
import Image from 'next/image'
import LogoFoto from '@/public/images/logo.webp'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Ezgi">
      
      <div className="">
      <Image 
        src={LogoFoto}
        alt="Logo"
        className="w-14 h-14"
      />
      </div>
    </Link>
  )
};