import "./MainPage.css";
import Title from "../maincontent/article/title/Title";
import Subtitle from "../maincontent/article/subtitle/Subtitle";
import Galery from "../maincontent/article/galery/Galery";
import MainTitle from "../maincontent/maintitle/MainTitle";
import ArticlePreview from "../articlepreview/ArticlePreview";
const MainPage: React.FC = () => {
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
    </>
  )
}
export default MainPage;