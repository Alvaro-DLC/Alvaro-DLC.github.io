import ProjectDisplay from "../components/ProjectDisplay";
import Proj from "../assets/repos.json";

const Projects = () => {
    return (
        <div className="container" style={{ marginTop: '8%' }}>
            {/* TODO: add loop for when addin more projs l8r */}
            <ProjectDisplay proj={Proj[0]} />
        </div>
    )
}

export default Projects;