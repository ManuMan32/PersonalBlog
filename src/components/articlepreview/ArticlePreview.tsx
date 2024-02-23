import { ArticleType } from "../../model";
import "./ArticlePreview.css";
interface Props {
  articleObject: ArticleType
}
const ArticlePreview: React.FC<Props> = ({ articleObject }) => {
  return (
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
  )
}
export default ArticlePreview;