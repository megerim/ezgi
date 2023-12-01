import Aboutme from '@/components/aboutme'
import Timeline from '@/components/timeline'
import Sertifikalar from '@/components/sertifikalar'

export const metadata = {
    title: 'Hakkımda - Zeynep Ezgi Kaya',
    description: 'Eğitim ve sertifika bilgilerim.',
  }
  
  export default function About() {
    return (
      <>
      <Aboutme />
      <Timeline />
      <Sertifikalar />
      </>
    )
  }
  