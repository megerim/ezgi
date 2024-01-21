import Link from 'next/link';
import Image from 'next/image'
import LogoFoto from '../../public/images/logo.png'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Ezgi">
      
      <div className="">
      <Image 
        src={LogoFoto}
        alt="Logo"
        width={1950}
        height={1250}
        className="w-64 h-24"
      />
      </div>
    </Link>
  )
};