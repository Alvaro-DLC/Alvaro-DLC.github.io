import styles from './ProjectDisplay.module.css';

const ProjectDisplay = ({ proj }) => {
    const itemList = [];
    for (let i = 0; i < proj.tech.length; i++) {
        itemList.push(<li key={`tech-${i}`} className={ styles.items }>{ proj.tech[i] }</li>)
    }
    for (let i = 0; i < proj.languages.length; i++) {
        itemList.push(<li key={`lang-${i}`} className={ styles.items }>{ proj.languages[i] }</li>)
    }

    return (
        <div className={ `flexContainer ${styles.projectContainer}` }>
            <div className={`column ${styles.imageAdjustments}`}>
                <img src={require(`../assets/images/${proj.img}`)}  alt={ proj.name } className={ styles.img }/>
            </div>

            <div className={`column ${styles.detailsAdjustments}`} style={{ margin: "5%"}}>
                <div>
                    <h1 className={ styles.title }>
                        { proj.type } - { proj.name }
                    </h1>

                    <ul className={styles.list}>{itemList}</ul>

                    <hr className={styles.line} />
                    <div className="text"> 
                        <sub>{ proj.description }</sub>
                    </div>
                </div>

                <div>
                    <a href={ proj.repo_link } target="_blank" rel="noreferrer">
                        <button type="button" className="mobileButton">View Repo</button>
                    </a>
                    <a href={ proj.project_link } target="_blank" rel="noreferrer">
                        <button type="button" className="mobileButton">View Project</button>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ProjectDisplay;