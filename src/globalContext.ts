import { createContext, useContext } from "react"
export interface GlobalContextType {
  currentArticle: number
  setCurrentArticle: (_ : number) => void
  currentRoute: string
  setCurrentRoute: (_ : string) => void
}
export const GlobalContext = createContext<GlobalContextType>({
  currentArticle: 0,
  setCurrentArticle: (_: number) => { },
  currentRoute: "main",
  setCurrentRoute: (_: string) => { }
})
export const useGlobalContext = () => useContext(GlobalContext)