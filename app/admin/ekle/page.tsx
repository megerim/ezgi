import NewPost from '@/components/blog/newpost'


export const metadata = {
    title: 'Yazı Ekle - Zeynep Ezgi Kaya',
    description: 'Yeni yazı ekleme ekranı.',
  }
  
  export default function About() {
    return (
      <>
      <div>
      <NewPost />
      </div>
      </>
    )
  }
  