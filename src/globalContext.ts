import { createContext, useContext } from "react"
export interface GlobalContextType {
  currentArticle: number
  setCurrentArticle: (_ : number) => void
}
export const GlobalContext = createContext<GlobalContextType>({
  currentArticle: 0,
  setCurrentArticle: (_: number) => { },
})
export const useGlobalContext = () => useContext(GlobalContext)