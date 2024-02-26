import "./OptionBox.css";
import { useState } from 'react';
interface Props {
  title: string
  options: string[]
  optionsFunction: (() => void)[]
}
const OptionBox: React.FC<Props> = ({ title, options, optionsFunction }) => {
  const [checked, setChecked] = useState<number>(0);
  function handleCheck(val: number) {
    setChecked(val);
  }
  return (
    <div className="option">
      <span className="optionTitle">{title}</span>
      <div className="optionsBox">
        {options.map((option, index) => {
          return <div className="optionBox" key={index}>
            <span className="optionBoxTitle">{option}</span>
            <div className={"optionBoxCheck" + ((checked == index) ? " checked" : "")} onClick={() => handleCheck(index)}></div>
          </div>
        })}
      </div>
    </div>
  )
}
export default OptionBox;