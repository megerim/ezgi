import Kategoryfoto from '@/components/blog/kategoryfoto'
import Tumyazilar from '@/components/blog/tumyazilar'
import "@/app/css/blogstyle.css"

export const metadata = {
    title: 'Hakkımda - Zeynep Ezgi Kaya',
    description: 'Eğitim ve sertifika bilgilerim.',
  }
  
  export default function Yazilar() {
    return (
      <>
      <Kategoryfoto />
      <Tumyazilar />
      </>
    )
  }
  