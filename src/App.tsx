import './App.css'
import Footer from './components/footer/Footer'
import MainContent from './components/maincontent/MainContent'
import { useState, useEffect } from "react"
import { GlobalContext } from './globalContext'
import MainPage from './components/mainpage/MainPage'
import { ArticleType, Theme } from './model'
import { Route, Routes } from 'react-router-dom'
import Articles from './components/articles/Articles'
import OptionsMenu from './components/optionsmenu/OptionsMenu'
import CheckNav from './components/nav/CheckNav'

let articles: ArticleType[] = [];
function App() {
  const defaultArticleObject: ArticleType = {
    id: "-1",
    maintitle: "Error",
    description: "Error",
    image: "testimg1.jpg",
    content: [
      ["p", "See the browser's console for more information."]
    ]
  }
  // App functionalities
  const [currentArticle, setCurrentArticle] = useState<number>(0);
  const [currentRoute, setCurrentRoute] = useState<string>("main");
  const [currentArticleObject, setCurrentArticleObj] = useState<ArticleType>(defaultArticleObject);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [optionsShown, setOptionsShown] = useState<boolean>(false);
  const [scrolleable, setScrolleable] = useState<boolean>(true); // Used for options modal
  const [recomendations, setRecomendations] = useState<number[]>([0, 1, 2]);
  // User options
  const [theme, setTheme] = useState<Theme>("dark");
  const [animations, setAnimations] = useState<boolean>(true);
  const [background, setBackground] = useState<boolean>(true);
  const root = document.documentElement;
  function handleChangeTheme(newTheme: Theme) {
    if (newTheme == "dark") {
      root.style.setProperty('--ui1', '#333');
      root.style.setProperty('--ui2', '#000');
      root.style.setProperty('--ui3', '#272727');
      root.style.setProperty('--ui4', (background) ? '#141414' : '#000');
      root.style.setProperty('--button-hover', '#444');
      root.style.setProperty('--button-active', '#555');
      root.style.setProperty('--text-color', '#fff');
    } else {
      root.style.setProperty('--ui1', '#ddd');
      root.style.setProperty('--ui2', '#fff');
      root.style.setProperty('--ui3', '#ddd');
      root.style.setProperty('--ui4', (background) ? '#eaeaea' : '#fff');
      root.style.setProperty('--button-hover', '#ccc');
      root.style.setProperty('--button-active', '#aaa');
      root.style.setProperty('--text-color', '#222');
    }
    setTheme(newTheme);
  }
  // Functions
  function handleDeleteBackground(newValue: boolean) {
    if (newValue) {
      (theme == "dark") ? root.style.setProperty('--ui4', '#000')
        : root.style.setProperty('--ui4', '#fff');
    } else {
      (theme == "dark") ? root.style.setProperty('--ui4', '#141414')
        : root.style.setProperty('--ui4', '#eaeaea');
    }
    setBackground(!newValue);
  }
  function getRandomArticles(): number[] {
    const getValue = () => Math.floor(Math.random() * 5)
    let val1 = getValue();
    while (val1 == currentArticle) { val1 = getValue() }
    let val2 = getValue();
    while (val2 == currentArticle || val1 == val2) { val2 = getValue() }
    let val3 = getValue();
    while (val3 == currentArticle || val3 == val1 || val3 == val2) { val3 = getValue() }
    return [val1, val2, val3];
  }
  // Effects
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
  }, []);
  useEffect(() => {
    setRecomendations(getRandomArticles());
  }, [currentArticle]);
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
        setOptionsShown,
        theme,
        handleChangeTheme,
        animations,
        setAnimations,
        background,
        setBackground,
        handleDeleteBackground,
        recomendations
      }}>
        <CheckNav />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/article/:articleId' element={<MainContent />} />
        </Routes>
        <Footer />
        {optionsShown && <OptionsMenu />}
      </GlobalContext.Provider>
    </div>
  )
}
export default App