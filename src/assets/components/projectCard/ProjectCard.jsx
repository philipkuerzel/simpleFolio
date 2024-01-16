import "./projectCard.css"

const ProjectCard = (props) => {
    return ( 
        <>
        <section className="card">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <h4>{props.description}</h4>
        </section>
        </>
    );
}

export default ProjectCard;