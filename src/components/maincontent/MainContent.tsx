import ArticlePreview from "../articlepreview/ArticlePreview";
import "./MainContent.css";
import Article from "./article/Article";
import Aside from "./aside/Aside";
import MainTitle from "./maintitle/MainTitle";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../../globalContext";
interface Article {
  maintitle: string
  description: string
  content: string[][]
}
const MainContent: React.FC = () => {
  let artObject: Article = {
    maintitle: "Error",
    description: "Error",
    content: [
      ["p", "See the browser's console for more information."]
    ]
  };
  const { currentArticle } = useGlobalContext();
  const [ mainTitle, setMainTitle ] = useState<string>("Blog title");
  const [ components, setComponents ] = useState<string[][]>(artObject.content);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async (currentArticle: number): Promise<void> => {
      try {
        const response = await fetch("http://localhost:5173/src/articles.json");
        if (!response.ok) { throw new Error("The articles data couldn't be loaded."); }
        const data = await response.json();
        artObject = data[currentArticle.toString()];
        setMainTitle(artObject.maintitle);
        setComponents(artObject.content);
        setIsLoading(false);
      } catch (e) {
        console.error("Fetching error: ", e);
      }
    }
    fetchData(currentArticle);
  }, [])
  return (
    <>
      <main className="main">
        <MainTitle title={mainTitle} isLoading={isLoading} />
        <div className="mainContent">
          <Article components={components} isLoading={isLoading} />
          <Aside />
        </div>
      </main>
      <h3 className="otherArticlesTitle">See other articles</h3>
      <ArticlePreview />
      <ArticlePreview />
      <ArticlePreview />
    </>
  )
}
export default MainContent;