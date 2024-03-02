import { Link } from "react-router-dom";
import { ArticleType } from "../../../../model";
import "./AsideArticlePreview.css";
import { useGlobalContext } from "../../../../globalContext";
interface Props {
  articleObj: ArticleType
}
const AsideArticlePreview: React.FC<Props> = ({ articleObj }) => {
  const { setCurrentArticle } = useGlobalContext();
  function handleClick() {
    setCurrentArticle(parseInt(articleObj.id));
    const screen = document.getElementById("app");
    screen?.scrollTo(0, 0);
  }
  return (
    <Link className="asideArticlePreviewLink" to={"/article/" + articleObj.id} onClick={handleClick}>
      <div className="asideArticlePreview">
        <div className="asideArticlePreviewImageBox">
          <img className="asideArticlePreviewImage" src={articleObj.image} alt={articleObj.image} />
        </div>
        <span className="asideArticlePreviewTitle">{articleObj.maintitle}</span>
        <span className="asideArticlePreviewDescription">{articleObj.description}</span>
      </div>
    </Link>
  )
}
export default AsideArticlePreview;