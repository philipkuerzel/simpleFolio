import Button from "../buttons/Button";
import "./intro.css"

const Intro = () => {
    return ( 
        <>
        <section className="intro">
        <h1>Hi, I am <span>John Smith</span></h1>
        <h3>A Front End Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut veritatis laboriosam doloribus illum magni recusandae aspernatur sunt consequuntur ullam, reprehenderit dolores fuga minima.
        </p>
        <Button
        title='resume'
        />
        </section>
        
        </>
     );
}
 
export default Intro;