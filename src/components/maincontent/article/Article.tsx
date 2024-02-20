import "./Article.css";
import FloatImg from "./floatimg/FloatImg";
import Subtitle from "./subtitle/Subtitle";
import Title from "./title/Title";
interface Props {
  components: string[][]
  isLoading: boolean
}
const Article: React.FC<Props> = ({ components, isLoading }) => {
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
      {components.map((comp, i) => returnElement(comp[0], comp[1], i) )}
    </article>
  )
}
export default Article;