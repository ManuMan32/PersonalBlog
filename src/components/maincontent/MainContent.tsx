import "./MainContent.css";
import Article from "./article/Article";
import Aside from "./aside/Aside";
import MainTitle from "./maintitle/MainTitle";
import { useGlobalContext } from "../../globalContext";
import { useParams } from "react-router-dom";
import ArticlesRecomendations from "./articlesrecomendations/ArticlesRecomendations";
const MainContent: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { isLoading } = useGlobalContext();
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
      <ArticlesRecomendations />
    </>
  )
}
export default MainContent;