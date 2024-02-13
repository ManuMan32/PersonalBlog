import "./MainTitle.css";
interface Props {
  title: string
}
const MainTitle: React.FC<Props> = ({ title }) => {
  const titleArray = title.split("");
  return (
    <div className="mainTitle">
      <div className="mainTitleLetters">
        {titleArray.map((letter, i) => {
          return <span className="mainTitleLetters_Letter" key={i}>
            {(letter == " ") ? "-" : letter}
            </span>
        })}
      </div>
    </div>
  )
}
export default MainTitle;