import { ArticleType } from "../../../../model";
import "./AsideArticlePreview.css";
interface Props {
  articleObj: ArticleType
}
const AsideArticlePreview: React.FC<Props> = ({ articleObj }) => {
  return (
    <div className="asideArticlePreview">
      <div className="asideArticlePreviewImageBox">
        <img className="asideArticlePreviewImage" src={articleObj.image} alt={articleObj.image} />
      </div>
      <span className="asideArticlePreviewTitle">{articleObj.maintitle}</span>
      <span className="asideArticlePreviewDescription">{articleObj.description}</span>
    </div>
  )
}
export default AsideArticlePreview;