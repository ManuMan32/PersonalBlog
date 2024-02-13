import "./MainContent.css";
import Article from "./article/Article";
import Aside from "./aside/Aside";
import MainTitle from "./maintitle/MainTitle";
const MainContent: React.FC = () => {
  return (
    <main className="main">
      <MainTitle title="Blog title" />
      <div className="mainContent">
        <Article />
        <Aside />
      </div>
    </main>
  )
}
export default MainContent;