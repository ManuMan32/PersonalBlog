import "./FloatImg.css";
interface Props {
  direction: "left" | "right"
  imgSrc: string
}
const FloatImg: React.FC<Props> = ({ direction, imgSrc }) => {
  return (
    <img className="floatImg" src={imgSrc} alt={imgSrc} style={{ float: direction }}/>
  )
}
export default FloatImg;