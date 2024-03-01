import "./MainPageAnimation.css";
import { useEffect, useRef, useState } from "react";
let iterations = 1;
const limitIterations = 7;
const MainPageAnimation: React.FC = () => {
  const [image, setImage] = useState<string>("1.png");
  const effectIntervalRef = useRef<number>(0);
  useEffect(() => {
    effectIntervalRef.current = setInterval(() => {
      const movingDivs = document.getElementsByClassName("mainPageAnimationWindowBox")[0].childNodes;
      const fixType = movingDivs as NodeListOf<HTMLElement>
      fixType[0].style.animation = '3s ease-in-out infinite moveDiv';
      fixType[1].style.animation = '3s ease-in-out .1s infinite moveDiv';
      fixType[2].style.animation = '3s ease-in-out .2s infinite moveDiv';
      setTimeout(() => {
        fixType[0].style.animation = 'none';
        fixType[1].style.animation = 'none';
        fixType[2].style.animation = 'none';
        iterations++;
        if (iterations > limitIterations) iterations = 1;
        setImage(`${iterations}.png`);
      }, 3000);
    }, 4000);
    return () => clearInterval(effectIntervalRef.current);
  }, []);
  return (
    <div className="mainPageAnimation">
      <div className="mainPageAnimationBox">
        <div className="mainPageAnimationWindowBox">
          <div className="mainPageAnimationWindow"></div>
          <div className="mainPageAnimationWindow"></div>
          <div className="mainPageAnimationWindow"></div>
        </div>
        <img className="mainPageAnimationImg" src={image} />
      </div>
    </div>
  )
}
export default MainPageAnimation;