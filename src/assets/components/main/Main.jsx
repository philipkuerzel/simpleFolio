import "./main.css"
import Intro from "../intro/Intro";
import Projects from "../_projects/Projects";
import Skills from "../skills/Skills";
import Footer from "../footer/Footer";

const Main = () => {
    return ( 
        <>
        <section className="main">
            <Intro/>
            <Projects/>
            <Skills/>
        </section>
        </>
    );
}

export default Main;