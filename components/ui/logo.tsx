import Link from 'next/link';
import Image from 'next/image'
import LogoFoto from '@/public/images/logo.jpg'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Ezgi">
      
      <div className="">
      <Image 
        src={LogoFoto}
        alt="Logo"
        width={144}
        height={56}
        className="w-36 h-14"
      />
      </div>
    </Link>
  )
};