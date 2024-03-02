import { Link } from "react-router-dom";
import { ArticleType } from "../../model";
import "./ArticlePreview.css";
import { useGlobalContext } from "../../globalContext";
interface Props {
  articleObject: ArticleType
  target: number
  big?: boolean
}
const ArticlePreview: React.FC<Props> = ({ articleObject, target, big = false }) => {
  const { setCurrentArticle } = useGlobalContext();
  function handleClick() {
    setCurrentArticle(target);
    const screen = document.getElementById("app");
    screen?.scrollTo(0, 0);
  }
  return (
    <div className={"articlePreview" + ((big) ? " articlePreviewBig" : "")}>
      <Link to={"/article/" + target.toString()} onClick={handleClick} >
        <div className="articlePreviewContainer">
          <div className="articlePreviewImg">
            <img src={articleObject.image} alt={articleObject.image} />
          </div>
          <div className="articlePreviewContent">
            <span className="articlePreview_title">{articleObject.maintitle}</span>
            <p className="articlePreview_description">
              {articleObject.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default ArticlePreview;