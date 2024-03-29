import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../../globalContext";
import "./MainTitle.css";
import { useEffect, useRef } from "react";
interface Props {
  isLoading: boolean
  type: "main" | "article"
}
const MainTitle: React.FC<Props> = ({ isLoading, type }) => {
  const { articleId } = useParams<{ articleId: string }>();
  const { articles, animations } = useGlobalContext();
  let title = "Loading";
  if (!isLoading) {
    const index: number = parseInt(articleId!);
    (isNaN(index)) ? title = "Manu's Blog"
      : title = articles[index].maintitle;
  }
  const titleArray = title.split("");
  titleArray.unshift("<");
  titleArray.push(">");
  const effectIntervalRef = useRef<number>(0);
  const clearAnimation = () => clearInterval(effectIntervalRef.current);
  useEffect(() => {
    effectIntervalRef.current = setInterval(() => {
      const letters: NodeListOf<HTMLElement> = document.querySelectorAll(".mainTitleLetters_Letter");
      letters.forEach((letter, i) => {
        setTimeout(() => letter.style.animation = `1s ease forwards letterAnimation`, 100 * i);
        setTimeout(() => letter.style.animation = `none`, 1000 + (100 * i));
      })
    }, 3000);
    if (!animations) {
      clearAnimation();
    }
    return (clearAnimation);
  }, [animations]);
  if (isLoading) return (
    <div className="mainTitle">
      <div className="mainTitleLetters">
        <span className="mainTitleLetters_Letter">Loading...</span>
      </div>
    </div>
  )
  return (
    <div className="mainTitle">
      <div className={"mainTitleLetters" + ((type == "main") ? " mainTitleBig" : "")}>
        {(type == "main") ? "Manu's Blog"
          : (titleArray.map((letter, i) => {
            return <span
              className={(letter == " ") ? "mainTitleLetters_Space" : "mainTitleLetters_Letter"}
              key={i}>
              {letter}
            </span>
          }))}
      </div>
    </div>
  )
}
export default MainTitle;