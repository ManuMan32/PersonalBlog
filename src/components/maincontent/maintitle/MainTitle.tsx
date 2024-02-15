import "./MainTitle.css";
import { useEffect, useRef } from "react";
interface Props {
  title: string
}
const MainTitle: React.FC<Props> = ({ title }) => {
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
  })
  return (
    <div className="mainTitle">
      <div className="mainTitleLetters">
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