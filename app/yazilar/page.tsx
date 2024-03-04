import Tumyazilar from '@/components/blog/tumyazilar'
import "@/app/css/blogstyle.css"

export const metadata = {
  generator: 'Zeynep Ezgi Kaya',
  applicationName: 'Uzman Psikolojik Danışman Zeynep Ezgi Kaya',
  referrer: 'origin-when-cross-origin',
  keywords: ['Gaziemir', 'gaziemir oyun terapisi', 'izmir oyun terapisi', 'Oyun terapisi', 'izmir danışmanlık', 'izmir psikoloji', 'zeynep ezgi kaya', 'zeynep ezgi gökhan', 'çocuk terapisi', 'aile terapisi', 'dikkat eksikliği gaziemir', 'dehb gaziemir', 'dehb izmir', 'kaygı gaziemir', 'kendini affetmek', 'minnettarlık atölyesi', 'gaziemir dikkat eksikliği'],
  authors: { name: 'Zeynep Ezgi Kaya' },
  creator: 'Zeynep Ezgi Kaya',
  publisher: 'Zeynep Ezgi Kaya',
    title: 'Yazılarım - Zeynep Ezgi Kaya',
    description: 'Alanımla ilgili yazılarım ve rehberlerim.',
  }
  
  export default function Yazilar() {
    return (
      <>
      <h3 className="mt-24 flex items-center">
        <span
          aria-hidden="true"
          className="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"
        />
        <span className="bg-clip-text text-2xl font-bold tracking-tight sm:text-4xl mx-5 text-transparent bg-gradient-to-br from-gray-900 via-gray-700 to-primary"> Tüm Yazılarım </span>

        <span
          aria-hidden="true"
          className="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"
        />
      </h3>
      <Tumyazilar />
      </>
    )
  }
  