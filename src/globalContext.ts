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
  setOptionsShown: (_ : boolean) => void
  setScrolleable: (_ : boolean) => void
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
  },
  setOptionsShown: (_: boolean) => { },
  setScrolleable: (_: boolean) => { }
})
export const useGlobalContext = () => useContext(GlobalContext)