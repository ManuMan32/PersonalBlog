import { useGlobalContext } from "../../globalContext";
import ArticlePreview from "../articlepreview/ArticlePreview";
import "./Articles.css";
const Articles: React.FC = () => {
  const { articles, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <div className="articles">
        <span>Loading...</span>
      </div>
    )
  }
  return (
    <div className="articles">
      <ArticlePreview articleObject={articles[0]} target={0} big={true} />
      <ArticlePreview articleObject={articles[1]} target={1} />
      <ArticlePreview articleObject={articles[2]} target={2} />
      <ArticlePreview articleObject={articles[3]} target={3} />
      <ArticlePreview articleObject={articles[4]} target={4} big={true} />
      <ArticlePreview articleObject={articles[5]} target={5} />
    </div>
  )
}
export default Articles;