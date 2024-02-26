import { useGlobalContext } from "../../../globalContext";
import "./OptionBox.css";
interface Props {
  title: string
  options: string[]
  optionsFunction: (() => void)[]
}
const OptionBox: React.FC<Props> = ({ title, options, optionsFunction }) => {
  // Possible options
  const { theme, animations, background } = useGlobalContext();
  function handleCheckChecked(index: number): boolean {
    let value;
    switch (title) {
      case "Theme": value = (theme == "dark") ? 0 : 1; break;
      case "Animations": value = (animations) ? 0 : 1; break;
      case "Background": value = (background) ? 0 : 1; break;
      default: return false;
    }
    return (value == index);
  }
  return (
    <div className="option">
      <span className="optionTitle">{title}</span>
      <div className="optionsBox">
        {options.map((option, index) => {
          return <div className="optionBox" key={index}>
            <span className="optionBoxTitle">{option}</span>
            <div
              className={"optionBoxCheck" + ((handleCheckChecked(index)) ? " checked" : "")}
              onClick={() => optionsFunction[index]() }></div>
          </div>
        })}
      </div>
    </div>
  )
}
export default OptionBox;