import "./Article.css";
import FloatImg from "./floatimg/FloatImg";
import Galery from "./galery/Galery";
import Subtitle from "./subtitle/Subtitle";
import Title from "./title/Title";
const Article: React.FC = () => {
  return (
    <article className="article">
      <Title>Title</Title>
      <Subtitle>Subtitle!</Subtitle>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus sint vero corrupti deleniti beatae, ad itaque maxime quibusdam omnis modi a, molestiae dolorem ex incidunt aliquid rem eos vel doloribus.</p>
      <FloatImg direction="left" imgSrc="testimg1.jpg" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi ab neque veritatis amet inventore qui enim totam, soluta expedita? Eos dolorum quas, tempora blanditiis quaerat numquam quisquam repellat qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis suscipit enim. Eius dicta reprehenderit numquam, veritatis ullam rerum ducimus optio doloremque repellat est alias libero laborum voluptates.
      <FloatImg direction="right" imgSrc="testimg2.jpg" />
      Nihil, eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, culpa fugiat quia aperiam et, aut adipisci itaque voluptatum cumque autem amet eius nobis architecto odio magni fugit sint ipsam facilis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere itaque repellendus minus cupiditate qui deserunt delectus ex quia architecto aliquam accusantium non sunt aspernatur cum ab magni, distinctio nesciunt voluptates.</p>
      <Galery images={["testimg2.jpg", "testimg1.jpg", "testimg2.jpg"]} height="300px" />
    </article>
  )
}
export default Article;