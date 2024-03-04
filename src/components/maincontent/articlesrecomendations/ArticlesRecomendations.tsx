import { useGlobalContext } from "../../../globalContext";
import ArticlePreview from "../../articlepreview/ArticlePreview";
import "./ArticlesRecomendations.css";
import { useState, useEffect } from 'react';
const ArticlesRecomendations: React.FC = () => {
  const { articles, recomendations } = useGlobalContext();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1150px)").matches);
    };
    window.addEventListener('resize', handleResize);
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {(isMobile) ? <h3 className="otherArticlesTitle"> &lt; Manu's Blog &gt; </h3>
        : (
          <>
            <h3 className="otherArticlesTitle">See other articles</h3>
            <ArticlePreview articleObject={articles[recomendations[0]]} target={recomendations[0]} />
            <ArticlePreview articleObject={articles[recomendations[1]]} target={recomendations[1]} />
            <ArticlePreview articleObject={articles[recomendations[2]]} target={recomendations[2]} />
          </>
        )}
    </>
  )
}
export default ArticlesRecomendations;