import ProjectDisplay from "../components/ProjectDisplay";
import Proj from "../assets/repos.json";

const Projects = () => {
    const projectList= [];

    for (let i = 0; i < Proj.length; i++) {
        projectList.push(
            <div key={`proj-${Proj[i].name}`} className="container">
                <ProjectDisplay proj={Proj[i]} />
            </div>
        )
    };

    return (
        <div>
            {projectList}
        </div>
    )
}

export default Projects;