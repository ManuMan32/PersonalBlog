export interface ArticleType {
  id: string
  maintitle: string
  description: string
  image: string
  content: string[][]
}
export type Theme = "dark" | "light"