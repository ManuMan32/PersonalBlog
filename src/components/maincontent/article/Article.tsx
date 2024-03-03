import { useGlobalContext } from "../../../globalContext";
import "./Article.css";
import ArticleLink from "./articlelink/ArticleLink";
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
  function returnElement(key: string, content: string | string[], uniqKey: number, extra: string[] | undefined): JSX.Element {
    switch (key) {
      case "title": return <Title key={uniqKey}>{content as string}</Title>
      case "subtitle": return <Subtitle key={uniqKey}>{content as string}</Subtitle>
      case "p": return <p key={uniqKey}>{content}</p>
      case "imgleft": return <FloatImg key={uniqKey} direction="left" imgSrc={content as string} />
      case "imgright": return <FloatImg key={uniqKey} direction="right" imgSrc={content as string} />
      case "galery": return <Galery key={uniqKey} images={content as string[]} height={(extra == undefined) ? ["300px", "300px"] : extra} />
      case "divider": return <Divider key={uniqKey} />
      case "link": return <ArticleLink key={uniqKey} content={content[1]} href={content[0]} router={content[2]} target={content[3]} />
      default: return <span key={uniqKey} style={{ color: "red", display: "block" }}>_Error loading the article content_</span>
    }
  }
  if (isLoading) return (
    <article className="article">
      Loading...
    </article>
  )
  const components: [string, string | string[], string[] | undefined][] = articles[target].content as [string, string | string[], string[] | undefined][];
  return (
    <article className="article">
      {components.map((comp, i) => returnElement(comp[0], comp[1], i, comp[2]) )}
    </article>
  )
}
export default Article;