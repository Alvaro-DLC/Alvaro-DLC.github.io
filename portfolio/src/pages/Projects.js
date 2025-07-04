import ProjectDisplay from "../components/ProjectDisplay";
import Proj from "../assets/repos.json";

const Projects = () => {
    return (
        <div className="container">
            {/* TODO: add loop for when addin more projs l8r */}
            <ProjectDisplay proj={Proj[0]} />
        </div>
    )
}

export default Projects;