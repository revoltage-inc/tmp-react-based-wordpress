import useSWR, { KeyedMutator } from 'swr'

export interface Post {
  id: number
  title: string
  content: string
  slug: string
  tags: number[]
  categories: number[]
  author: number
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
  link: string
  date: Date
  modified: Date
}

export interface PostResponse {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  slug: string
  tags: number[]
  categories: number[]
  author: number
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
  link: string
  date: string
  modified: string
}

/**
 * 全ての投稿を取得する
 */
export const useAllPosts = (): readonly [Post[] | undefined, KeyedMutator<Post[]>] => {
  const url = '/wp-json/wp/v2/posts?status=publish'

  const {
    data: posts,
    mutate,
    error,
  } = useSWR(
    'api/posts',
    async (): Promise<Post[]> => {
      // TODO: ページネーションで取得できるようにする
      const response = (await (
        await fetch(url, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Charset: 'utf-8',
            Accept: 'application/json',
          },
        })
      ).json()) as PostResponse[]

      return response.map((post) => ({
        id: post.id,
        title: post.title.rendered,
        content: post.content.rendered,
        slug: post.slug,
        tags: post.tags,
        categories: post.categories,
        author: post.author,
        status: post.status,
        link: post.link,
        date: new Date(post.date),
        modified: new Date(post.modified),
      }))
    },
    {
      focusThrottleInterval: 1000 * 60 * 60 * 24, // 24時間
    }
  )

  if (error) {
    throw error
  }

  return [posts, mutate] as const
}
