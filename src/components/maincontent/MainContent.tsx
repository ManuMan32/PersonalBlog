import "./MainContent.css";
import ArticlePreview from "../articlepreview/ArticlePreview";
import Article from "./article/Article";
import Aside from "./aside/Aside";
import MainTitle from "./maintitle/MainTitle";
import { useGlobalContext } from "../../globalContext";
import { ArticleType } from "../../model";

let articles: ArticleType[] = [];
const MainContent: React.FC = () => {
  const { isLoading, articles, currentArticleObject } = useGlobalContext();
  if (isLoading) {
    return (
      <main className="main">
        <MainTitle title={currentArticleObject.maintitle} isLoading={isLoading} type="article" />
        <div className="mainContent">
          <Article components={currentArticleObject.content} isLoading={isLoading} />
          <Aside />
        </div>
      </main>
    )
  }
  return (
    <>
      <main className="main">
        <MainTitle title={currentArticleObject.maintitle} isLoading={isLoading} type="article" />
        <div className="mainContent">
          <Article components={currentArticleObject.content} isLoading={isLoading} />
          <Aside />
        </div>
      </main>
      <h3 className="otherArticlesTitle">See other articles</h3>
      <ArticlePreview articleObject={articles[0]} />
      <ArticlePreview articleObject={articles[1]} />
      <ArticlePreview articleObject={articles[2]} />
    </>
  )
}
export default MainContent;