import { Link } from "react-router-dom";
import { ArticleType } from "../../model";
import "./ArticlePreview.css";
interface Props {
  articleObject: ArticleType
  target: number
}
const ArticlePreview: React.FC<Props> = ({ articleObject, target }) => {
  return (
    <Link to={"/article/"+target.toString()}>
      <div className="articlePreview">
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
  )
}
export default ArticlePreview;