import "./Title.css";
interface Props {
  children: string
}
const Title: React.FC<Props> = ({ children }) => {
  return (
    <div className="title">
      {children}
    </div>
  )
}
export default Title;