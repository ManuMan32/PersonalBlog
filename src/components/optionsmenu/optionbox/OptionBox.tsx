import { useGlobalContext } from "../../../globalContext";
import "./OptionBox.css";
import { useState } from 'react';
interface Props {
  title: string
  options: string[]
  optionsFunction: (() => void)[]
}
const OptionBox: React.FC<Props> = ({ title, options, optionsFunction }) => {
  // Possible options
  const { theme } = useGlobalContext();
  const [checked, setChecked] = useState<number>(0);
  function handleCheck(val: number) {
    setChecked(val);
  }
  function handleCheckChecked(index: number): boolean {
    switch (title) {
      case "Theme": const value = (theme == "dark") ? 0 : 1;
        return (value == index);
      default: return false;
    }
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
              onClick={() => {
                handleCheck(index);
                optionsFunction[index]();
              }}></div>
          </div>
        })}
      </div>
    </div>
  )
}
export default OptionBox;