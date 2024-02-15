import "./ArticlePreview.css";
const ArticlePreview: React.FC = () => {
  return (
    <div className="articlePreview">
      <div className="articlePreviewImg">
        <img src="testimg1.jpg" alt="coso" />
      </div>
      <div className="articlePreviewContent">
        <span className="articlePreview_title">Article title (Article title)</span>
        <p className="articlePreview_description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus numquam aliquid alias mollitia aliquam laborum officiis rem. Odit non ipsam officiis totam, consequuntur nobis sapiente perferendis quas quam, eaque corporis.
        </p>
      </div>
    </div>
  )
}
export default ArticlePreview;