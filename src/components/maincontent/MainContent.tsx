import ArticlePreview from "../articlepreview/ArticlePreview";
import "./MainContent.css";
import Article from "./article/Article";
import Aside from "./aside/Aside";
import MainTitle from "./maintitle/MainTitle";
const MainContent: React.FC = () => {
  return (
    <>
      <main className="main">
        <MainTitle title="Blog title" />
        <div className="mainContent">
          <Article />
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