import "./Galery.css";
interface Props {
  images: string[]
  height: string
}
const Galery: React.FC<Props> = ({ images, height }) => {
  return (
    <div className="galery" style={{height: height}}>
      {images.map((img, i) => {
        return <div className="galeryImgContainer">
          <img src={img} alt={img} key={i} />
        </div>
      })}
    </div>
  )
}
export default Galery;