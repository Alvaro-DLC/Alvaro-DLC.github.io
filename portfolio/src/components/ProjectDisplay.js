import styles from './ProjectDisplay.module.css';

const ProjectDisplay = ({ proj }) => {
    const itemList = [];
    for (let i = 0; i < proj.tech.length; i++) {
        itemList.push(<li className={ styles.items }>{ proj.tech[i] }</li>)
    }
    for (let i = 0; i < proj.languages.length; i++) {
        itemList.push(<li className={ styles.items }>{ proj.languages[i] }</li>)
    }

    return (
        <div className="flexContainer">
            <div className="column">
                <img src={require(`../assets/images/${proj.img}`)}  alt={ proj.name } style={{ width: '400px' }}/>
            </div>

            <div className="column">
                <div>
                    <h1 className={ styles.title }>
                        { proj.type } - { proj.name }
                    </h1>

                    <ul className={styles.list}>{itemList}</ul>

                    <hr />

                    <sub>{ proj.description }</sub>
                </div>

                <a href={ proj.repo_link } target="_blank" rel="noreferrer">
                    <button type="button">View Repo</button>
                </a>
                <a href={ proj.project_link } target="_blank" rel="noreferrer">
                    <button type="button">View Project</button>
                </a>

            </div>
        </div>
    )
}

export default ProjectDisplay;