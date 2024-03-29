import { useGlobalContext } from "../../../globalContext";
import Subtitle from "../article/subtitle/Subtitle";
import "./Aside.css";
import AsideArticlePreview from "./asidearticlepreview/AsideArticlePreview";
import AsideSocialMedia from "./asidesocialmedia/AsideSocialMedia";
const Aside: React.FC = () => {
  const { articles, isLoading, recomendations } = useGlobalContext();
  return (
    <aside className="aside">
      <div className="asideContent1">
        <Subtitle>Other articles:</Subtitle>
        {(isLoading) ? (<span>Loading...</span>)
          : (<>
            <AsideArticlePreview articleObj={articles[recomendations[0]]} />
            <AsideArticlePreview articleObj={articles[recomendations[1]]} />
            <AsideArticlePreview articleObj={articles[recomendations[2]]} />
          </>)}
      </div>
      <div className="asideContent2">
        <p style={{
          textAlign: 'center',
          textIndent: '0',
          opacity: '0.5'
        }}>I'm a 17 y/o boy sharing content about code and self improvement. Studying to be a future programmer and fulfill my dreams.</p>
        <Subtitle>Social Media:</Subtitle>
        <AsideSocialMedia name="Twitter" image="/iconTwitter.svg" link="https://twitter.com/ManuCro32" />
        <AsideSocialMedia name="YouTube" image="/iconYoutube.svg" link="https://www.youtube.com/channel/UCq6abTyDgfHaiMEutdbmdqw" />
        <AsideSocialMedia name="GitHub" image="/iconGithub.svg" link="https://github.com/ManuMan32" />
      </div>
    </aside>
  )
}
export default Aside;