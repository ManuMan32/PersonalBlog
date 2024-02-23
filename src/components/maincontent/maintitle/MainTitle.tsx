import "./MainTitle.css";
import { useEffect, useRef } from "react";
interface Props {
  title: string
  isLoading: boolean
  type: "main" | "article"
}
const MainTitle: React.FC<Props> = ({ title, isLoading, type }) => {
  const titleArray = title.split("");
  titleArray.unshift("<");
  titleArray.push(">");
  const effectIntervalRef = useRef<number>(0);
  useEffect(() => {
    effectIntervalRef.current = setInterval(() => {
      const letters: NodeListOf<HTMLElement> = document.querySelectorAll(".mainTitleLetters_Letter");
      letters.forEach((letter, i) => {
        setTimeout(() => letter.style.animation = `1s ease forwards letterAnimation`, 100 * i);
        setTimeout(() => letter.style.animation = `none`, 1000 + (100 * i));
      })
    }, 3000);
    return (() => clearInterval(effectIntervalRef.current));
  }, [title])
  if (isLoading) return (
    <div className="mainTitle">
      <div className="mainTitleLetters">
        <span className="mainTitleLetters_Letter">Loading...</span>
      </div>
    </div>
  )
  return (
    <div className="mainTitle">
      <div className="mainTitleLetters" style={{ fontSize: ((type == "main") ? "70px" : "45px") }}>
        {titleArray.map((letter, i) => {
          return <span
            className={(letter == " ") ? "mainTitleLetters_Space" : "mainTitleLetters_Letter"}
            key={i}>
            {letter}
          </span>
        })}
      </div>
    </div>
  )
}
export default MainTitle;