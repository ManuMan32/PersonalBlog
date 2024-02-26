import { useGlobalContext } from "../../globalContext";
import "./OptionsMenu.css";
import OptionBox from "./optionbox/OptionBox";
const OptionsMenu: React.FC = () => {
  const { setScrolleable, setOptionsShown, handleChangeTheme } = useGlobalContext();
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
        <OptionBox title="Animations" options={["True", "False"]} optionsFunction={[() => void 0]} />
        <OptionBox title="Background" options={["True", "False"]} optionsFunction={[() => void 0]} />
      </div>
    </div>
  )
}
export default OptionsMenu;