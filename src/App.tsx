import './App.css'
import Footer from './components/footer/Footer'
import MainContent from './components/maincontent/MainContent'
import Nav from './components/nav/Nav'
import { useState } from "react"
import { GlobalContext } from './globalContext'
import MainPage from './components/mainpage/MainPage'

function App() {
  const [ currentArticle, setCurrentArticle ] = useState<number>(2);
  const [ currentRoute, setCurrentRoute ] = useState<string>("main");
  return (
    <div id='app'>
      <GlobalContext.Provider value={{
        currentArticle,
        setCurrentArticle,
        currentRoute,
        setCurrentRoute
      }}>
        <Nav />
        {(currentRoute == "main") ? <MainPage />
          : <MainContent />}
        <Footer />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
