import "./MainContent.css";
import ArticlePreview from "../articlepreview/ArticlePreview";
import Article from "./article/Article";
import Aside from "./aside/Aside";
import MainTitle from "./maintitle/MainTitle";
import { useGlobalContext } from "../../globalContext";
import { useParams } from "react-router-dom";
const MainContent: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { isLoading, articles } = useGlobalContext();
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
      <ArticlePreview articleObject={articles[0]} target={0}/>
      <ArticlePreview articleObject={articles[1]} target={1}/>
      <ArticlePreview articleObject={articles[2]} target={2}/>
    </>
  )
}
export default MainContent;