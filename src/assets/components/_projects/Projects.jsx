import ProjectCard from "../projectCard/ProjectCard";
import "./projects.css"

const Projects = () => {
    return ( 
        <>
        <section className="secProjects">
            <h2>Projects</h2>
            <div className="projects">
            <ProjectCard
                title = {"Project1"}
                text = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut veritatis laboriosam doloribus illum magni."}
                description = {"JavaScript React Sass"}
            />
            <ProjectCard
                title = {"Project2"}
                text = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut veritatis laboriosam doloribus illum magni."}
                description = {"JavaScript React Sass"}
            />
            <ProjectCard
                title = {"Project3"}
                text = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut veritatis laboriosam doloribus illum magni."}
                description = {"JavaScript React Sass"}
            />
            </div>
        </section>
        </>
    );
}

export default Projects;