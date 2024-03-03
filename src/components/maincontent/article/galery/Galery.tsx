import "./Galery.css";
import { useState, useEffect } from 'react';
interface Props {
  images: string[]
  height: string[]
}
const Galery: React.FC<Props> = ({ images, height }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 700px)").matches);
    };
    window.addEventListener('resize', handleResize);
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <div className="galery" style={{height: ((isMobile) ? height[0] : height[1])}}>
      {images.map((img, i) => {
        return <div className="galeryImgContainer" key={i}>
          <img src={img} alt={img} />
        </div>
      })}
    </div>
  )
}
export default Galery;