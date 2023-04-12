import { useAllPosts } from '@libs/hook/post'
import '@assets/css/pages/top.css'

export const Top = () => {
  const [data, error] = useAllPosts()
  console.log(data)
  return (
    <>
      <main>
        <p>トップページ</p>
      </main>
    </>
  )
}
