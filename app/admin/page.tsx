import BlogEdit from '@/components/blogedit'

export const metadata = {
  title: 'Blog Edit',
  description: 'Blog edit',
}


export default function Page() {
  return (
  <div >

    <div className="md:p-24">
  <BlogEdit />
  </div>
  </div>
  )
}