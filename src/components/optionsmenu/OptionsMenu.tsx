import { useGlobalContext } from "../../globalContext";
import "./OptionsMenu.css";
import OptionBox from "./optionbox/OptionBox";
const OptionsMenu: React.FC = () => {
  const { setScrolleable, setOptionsShown, handleChangeTheme, setAnimations, setBackground } = useGlobalContext();
  function handleCloseButton() {
    setScrolleable(true);
    setOptionsShown(false);
  }
  return (
    <div className="optionsMenu">
      <div className="optionsMenuBox">
        <button type="button" className="optionsMenuCloseButton" onClick={handleCloseButton}>X</button>
        <span className="optionsMenuBoxTitle">Options</span>
        <OptionBox
          title="Theme"
          options={["Dark", "Light"]}
          optionsFunction={[() => handleChangeTheme("dark"), () => handleChangeTheme("light")]} />
        <OptionBox
          title="Animations"
          options={["True", "False"]}
          optionsFunction={[() => setAnimations(true), () => setAnimations(false)]} />
        <OptionBox
          title="Background"
          options={["True", "False"]}
          optionsFunction={[() => setBackground(true), () => setBackground(false)]} />
      </div>
    </div>
  )
}
export default OptionsMenu;