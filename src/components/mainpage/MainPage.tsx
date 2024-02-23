import "./MainPage.css";
import Title from "../maincontent/article/title/Title";
import Subtitle from "../maincontent/article/subtitle/Subtitle";
import Galery from "../maincontent/article/galery/Galery";
import MainTitle from "../maincontent/maintitle/MainTitle";
import ArticlePreview from "../articlepreview/ArticlePreview";
import { useGlobalContext } from "../../globalContext";
const MainPage: React.FC = () => {
  const { articles, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <MainTitle title="Manu's Blog" isLoading={true} type="main"/>
        <div className="mainContent">
          <article className="mainPage">
            <Title>Loading...</Title>
          </article>
        </div>
      </>
    )
  }
  return (
    <>
      <main className="main">
        <MainTitle title="Manu's Blog" isLoading={false} type="main"/>
        <div className="mainContent">
          <article className="mainPage">
            <Title>Welcome!</Title>
            <Subtitle>Journey and experiences of a 17 y/o boy learning to code.</Subtitle>
            <Subtitle>I share technology and self development content</Subtitle>
            <Galery images={["friends1.jpeg", "code1.jpeg", "me6.jpeg"]} height="300px" />
            <Subtitle>What are you waiting for to be part of this community?</Subtitle>
          </article>
        </div>
      </main>
      <ArticlePreview articleObject={articles[0]} target={0} />
      <ArticlePreview articleObject={articles[1]} target={1} />
      <ArticlePreview articleObject={articles[2]} target={2} />
    </>
  )
}
export default MainPage;