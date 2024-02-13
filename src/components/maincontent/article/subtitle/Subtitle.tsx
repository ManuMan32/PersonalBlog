import "./Subtitle.css";
interface Props {
  children: string
}
const Subtitle: React.FC<Props> = ({ children }) => {
  return (
    <div className="subtitle">
      {children}
    </div>
  )
}
export default Subtitle;