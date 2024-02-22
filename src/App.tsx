import './App.css'
import Footer from './components/footer/Footer'
import MainContent from './components/maincontent/MainContent'
import Nav from './components/nav/Nav'
import { useState } from "react"
import { GlobalContext } from './globalContext'

function App() {
  const [ currentArticle, setCurrentArticle ] = useState<number>(0);
  return (
    <div id='app'>
      <GlobalContext.Provider value={{
        currentArticle,
        setCurrentArticle
      }}>
        <Nav />
        <MainContent />
        <Footer />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
