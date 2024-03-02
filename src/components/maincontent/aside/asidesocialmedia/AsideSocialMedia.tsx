import "./AsideSocialMedia.css";
interface Props {
  name: string
  image: string
  link: string
}
const AsideSocialMedia: React.FC<Props> = ({ name, image, link }) => {
  return (
    <a className="asideSocialMediaLink" href={link} target="_blank">
      <div className="asideSocialMedia">
        <div className="asideSocialMediaImgBox">
          <img className="asideSocialMediaImg" src={image} alt={name} />
        </div>
        <span className="asideSocialMediaLabel">{name}</span>
      </div>
    </a>
  )
}
export default AsideSocialMedia;