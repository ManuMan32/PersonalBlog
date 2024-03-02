import { Link } from "react-router-dom";
import "./ArticleLink.css";
import { useGlobalContext } from "../../../../globalContext";
interface Props {
  content: string
  href: string
  router: string
  target?: string
}
const ArticleLink: React.FC<Props> = ({ content, href, router, target }) => {
  const { setCurrentArticle } = useGlobalContext();
  function handleClick() {
    setCurrentArticle(parseInt(target!));
    const screen = document.getElementById("app");
    screen?.scrollTo(0, 0);
  }
  return (
    <>
      {(router == "true") ? <Link className="articleLink" to={href} onClick={handleClick}>{content}</Link>
        : <a className="articleLink" href={href} target="_blank">{content}</a>}
    </>
  )
}
export default ArticleLink;