import { useGlobalContext } from "../../../globalContext";
import Subtitle from "../article/subtitle/Subtitle";
import "./Aside.css";
import AsideArticlePreview from "./asidearticlepreview/AsideArticlePreview";
import AsideSocialMedia from "./asidesocialmedia/AsideSocialMedia";
import { useRef, useEffect } from 'react';
const Aside: React.FC = () => {
  const { articles, isLoading, currentArticle } = useGlobalContext();
  function getRandomValues(): number[] {
    const getValue = () => Math.floor(Math.random() * articles.length)
    let val1 = getValue();
    while (val1 == currentArticle) { val1 = getValue() }
    let val2 = getValue();
    while (val2 == currentArticle || val1 == val2) { val2 = getValue() }
    let val3 = getValue();
    while (val3 == currentArticle || val3 == val1 || val3 == val2) { val3 = getValue() }
    return [val1, val2, val3];
  }
  const articlesValues = getRandomValues();
  return (
    <aside className="aside">
      <Subtitle>Other articles:</Subtitle>
      {(isLoading) ? (<span>Loading...</span>)
        : (<>
          <AsideArticlePreview articleObj={articles[articlesValues[0]]} />
          <AsideArticlePreview articleObj={articles[articlesValues[1]]} />
          <AsideArticlePreview articleObj={articles[articlesValues[2]]} />
        </>)}
      <p style={{
        textAlign: 'center',
        textIndent: '0',
        opacity: '0.5'
      }}>I'm a 17 y/o boy sharing content about code and self improvement. Studying to be a future programmer and fulfill my dreams.</p>
      <Subtitle>Social Media:</Subtitle>
      <AsideSocialMedia name="Twitter" image="/iconTwitter.svg" link="https://twitter.com/ManuCro32" />
      <AsideSocialMedia name="YouTube" image="/iconYoutube.svg" link="https://www.youtube.com/channel/UCq6abTyDgfHaiMEutdbmdqw" />
      <AsideSocialMedia name="GitHub" image="/iconGithub.svg" link="https://github.com/ManuMan32" />
    </aside>
  )
}
export default Aside;