import { useGlobalContext } from "../../../../globalContext";
import "./AsideSocialMedia.css";
interface Props {
  name: string
  image: string
  link: string
}
const AsideSocialMedia: React.FC<Props> = ({ name, image, link }) => {
  const { theme } = useGlobalContext();
  return (
    <a className="asideSocialMediaLink" href={link} target="_blank">
      <div className="asideSocialMedia">
        <div className="asideSocialMediaImgBox">
          <img className="asideSocialMediaImg" src={image} alt={name} style={{
            filter: 'invert' + ((theme == "dark") ? '(0%)' : '(100%)')
          }} />
        </div>
        <span className="asideSocialMediaLabel">{name}</span>
      </div>
    </a>
  )
}
export default AsideSocialMedia;