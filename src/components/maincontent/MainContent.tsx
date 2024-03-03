import "./MainContent.css";
import ArticlePreview from "../articlepreview/ArticlePreview";
import Article from "./article/Article";
import Aside from "./aside/Aside";
import MainTitle from "./maintitle/MainTitle";
import { useGlobalContext } from "../../globalContext";
import { useParams } from "react-router-dom";
const MainContent: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { isLoading, articles, recomendations } = useGlobalContext();
  if (isLoading) {
    return (
      <main className="main">
        <MainTitle isLoading={isLoading} type="article" />
        <div className="mainContent">
          <Article target={parseInt(articleId!)} isLoading={isLoading} />
          <Aside />
        </div>
      </main>
    )
  }
  return (
    <>
      <main className="main">
        <MainTitle isLoading={isLoading} type="article" />
        <div className="mainContent">
          <Article target={parseInt(articleId!)} isLoading={isLoading} />
          <Aside />
        </div>
      </main>
      <h3 className="otherArticlesTitle">See other articles</h3>
      <ArticlePreview articleObject={articles[recomendations[0]]} target={recomendations[0]}/>
      <ArticlePreview articleObject={articles[recomendations[1]]} target={recomendations[1]}/>
      <ArticlePreview articleObject={articles[recomendations[2]]} target={recomendations[2]}/>
    </>
  )
}
export default MainContent;