import NavMobile from "./navmobile/NavMobile";
import Nav from "./normalnav/Nav";
import { useState, useEffect } from 'react';

const CheckNav: React.FC = () => {
  const [mediaQuery, setMediaQuery] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setMediaQuery(window.matchMedia("(max-width: 900px)").matches);
    };
    window.addEventListener('resize', handleResize);
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return(
    <>
      {(mediaQuery) ? <NavMobile/> : <Nav />}
    </>
  )
}
export default CheckNav;