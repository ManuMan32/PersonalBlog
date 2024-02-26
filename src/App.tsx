import './App.css'
import Footer from './components/footer/Footer'
import MainContent from './components/maincontent/MainContent'
import Nav from './components/nav/Nav'
import { useState, useEffect } from "react"
import { GlobalContext } from './globalContext'
import MainPage from './components/mainpage/MainPage'
import { ArticleType } from './model'
import { Route, Routes } from 'react-router-dom'
import Articles from './components/articles/Articles'
import OptionsMenu from './components/optionsmenu/OptionsMenu'

let articles: ArticleType[] = [];
function App() {
  const defaultArticleObject: ArticleType = {
    maintitle: "Error",
    description: "Error",
    image: "testimg1.jpg",
    content: [
      ["p", "See the browser's console for more information."]
    ]
  }
  const [currentArticle, setCurrentArticle] = useState<number>(0);
  const [currentRoute, setCurrentRoute] = useState<string>("main");
  const [currentArticleObject, setCurrentArticleObj] = useState<ArticleType>(defaultArticleObject);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [optionsShown, setOptionsShown] = useState<boolean>(false);
  const [scrolleable, setScrolleable] = useState<boolean>(true); // Used for options modal
  useEffect(() => {
    const fetchData = async (currentArticle: number): Promise<void> => {
      try {
        const response = await fetch("http://localhost:5173/src/articles.json");
        if (!response.ok) { throw new Error("The articles data couldn't be loaded."); }
        const data = await response.json();
        articles = Object.values(data);
        setCurrentArticleObj(data[currentArticle.toString()]);
        setIsLoading(false);
      } catch (e) {
        console.error("Fetching error: ", e);
      }
    }
    fetchData(currentArticle);
  }, [])
  return (
    <div id='app' style={{
      overflow: (scrolleable) ? "auto" : "hidden"
    }}>
      <GlobalContext.Provider value={{
        currentArticle,
        setCurrentArticle,
        currentRoute,
        setCurrentRoute,
        articles,
        isLoading,
        setIsLoading,
        currentArticleObject,
        setScrolleable,
        setOptionsShown
      }}>
        <Nav />
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/articles' element={ <Articles /> } />
          <Route path='/article/:articleId' element={ <MainContent /> } />
        </Routes>
        <Footer />
        {optionsShown && <OptionsMenu />}
      </GlobalContext.Provider>
    </div>
  )
}

export default App
