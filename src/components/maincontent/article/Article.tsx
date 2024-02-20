import { useGlobalContext } from "../../../globalContext";
import "./Article.css";
import FloatImg from "./floatimg/FloatImg";
import Galery from "./galery/Galery";
import Subtitle from "./subtitle/Subtitle";
import Title from "./title/Title";
import { useEffect, useState } from "react"
interface Article {
  title: string
  content: string[][]
}
const Article: React.FC = () => {
  let artObject: Article = {
    title: "Error",
    content: [
      ["p", "See the browser's console for more information."]
    ]
  };
  const { currentArticle } = useGlobalContext();
  const [ components, setComponents ] = useState<string[][]>(artObject.content);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async (currentArticle: number): Promise<void> => {
      try {
        const response = await fetch("http://localhost:5173/src/articles.json");
        if (!response.ok) { throw new Error("The articles data couldn't be loaded."); }
        const data = await response.json();
        artObject = data[currentArticle.toString()];
        setComponents(artObject.content);
        setIsLoading(false);
      } catch (e) {
        console.error("Fetching error: ", e);
      }
    }
    fetchData(currentArticle);
  }, [])

  function returnElement(key: string, content: string, uniqKey: number): JSX.Element {
    switch (key) {
      case "title": return <Title key={uniqKey}>{content}</Title>
      case "subtitle": return <Subtitle key={uniqKey}>{content}</Subtitle>
      case "p": return <p key={uniqKey}>{content}</p>
      case "imgleft": return <FloatImg key={uniqKey} direction="left" imgSrc={content} />
      default: return <span key={uniqKey} style={{ color: "red", display: "block" }}>_Error loading the article content_</span>
    }
  }
  if (isLoading) return (
    <article className="article">
      Loading...
    </article>
  )
  return (
    <article className="article">
      {components.map((comp, i) => { 
        console.log(comp);
        return returnElement(comp[0], comp[1], i);
      })}
    </article>
  )
}
export default Article;