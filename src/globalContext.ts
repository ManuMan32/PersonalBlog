import { createContext, useContext } from "react"
import { ArticleType } from "./model"
export interface GlobalContextType {
  currentArticle: number
  setCurrentArticle: (_ : number) => void
  currentRoute: string
  setCurrentRoute: (_ : string) => void
  articles: ArticleType[]
  isLoading: boolean,
  setIsLoading: (_ : boolean) => void
  currentArticleObject: ArticleType
}
export const GlobalContext = createContext<GlobalContextType>({
  currentArticle: 0,
  setCurrentArticle: (_: number) => { },
  currentRoute: "main",
  setCurrentRoute: (_: string) => { },
  articles: [],
  isLoading: true,
  setIsLoading: (_: boolean) => { },
  currentArticleObject: {
    maintitle: "Error",
    description: "Error",
    image: "testimg1.jpg",
    content: [
      ["p", "See the browser's console for more information."]
    ]
  }
})
export const useGlobalContext = () => useContext(GlobalContext)