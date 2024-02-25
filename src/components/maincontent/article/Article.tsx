import { useGlobalContext } from "../../../globalContext";
import "./Article.css";
import Divider from "./divider/Divider";
import FloatImg from "./floatimg/FloatImg";
import Galery from "./galery/Galery";
import Subtitle from "./subtitle/Subtitle";
import Title from "./title/Title";
interface Props {
  target: number
  isLoading: boolean
}
const Article: React.FC<Props> = ({ target, isLoading }) => {
  const { articles } = useGlobalContext();
  function returnElement(key: string, content: string | string[], uniqKey: number): JSX.Element {
    switch (key) {
      case "title": return <Title key={uniqKey}>{content as string}</Title>
      case "subtitle": return <Subtitle key={uniqKey}>{content as string}</Subtitle>
      case "p": return <p key={uniqKey}>{content}</p>
      case "imgleft": return <FloatImg key={uniqKey} direction="left" imgSrc={content as string} />
      case "imgright": return <FloatImg key={uniqKey} direction="right" imgSrc={content as string} />
      case "galery": return <Galery images={content as string[]} height="300px"/>
      case "divider": return <Divider />
      case "link": return <a className="linkArticle" href={content[0]}>{content[1]}</a>
      default: return <span key={uniqKey} style={{ color: "red", display: "block" }}>_Error loading the article content_</span>
    }
  }
  if (isLoading) return (
    <article className="article">
      Loading...
    </article>
  )
  const components = articles[target].content;
  return (
    <article className="article">
      {components.map((comp, i) => returnElement(comp[0], comp[1], i) )}
    </article>
  )
}
export default Article;