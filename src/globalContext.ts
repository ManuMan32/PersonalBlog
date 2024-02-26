import { createContext, useContext } from "react"
import { ArticleType, Theme } from "./model"
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
  theme: Theme
  handleChangeTheme: (_ : Theme) => void
  animations: boolean
  setAnimations: (_ : boolean) => void
  background: boolean
  setBackground: (_ : boolean) => void
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
  setScrolleable: (_: boolean) => { },
  theme: "dark",
  handleChangeTheme: (_: Theme) => { },
  animations: true,
  setAnimations: (_: boolean) => { },
  background: true,
  setBackground: (_: boolean) => { }
})
export const useGlobalContext = () => useContext(GlobalContext)