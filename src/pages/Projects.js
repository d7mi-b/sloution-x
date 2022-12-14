import style from '../styles/projects.module.css';
import proj1 from '../images/doctor-looking-information-database.png';
import proj2 from '../images/side-view-cropped-unrecognizable-business-people-working-common-desk.png';
import proj3 from '../images/christopher-gower-m_HRfLhgABo-unsplash.png';
import sloution from '../images/settings.png';
import customer from '../images/user.png';
import project from '../images/layer.png';

const projects = [
    {
        id: 1,
        title: 'technical solutions technical solutions',
        body: 'A technical company that provides technical support, solves software problems, and builds applications and websites',
        img: proj1
    },
    {
        id: 2,
        title: 'technical solutions technical solutions',
        body: 'A technical company that provides technical support, solves software problems, and builds applications and websites',
        img: proj2
    },
    {
        id: 3,
        title: 'technical solutions technical solutions',
        body: 'A technical company that provides technical support, solves software problems, and builds applications and websites',
        img: proj3
    },
]

const facts = [
    {
        id: 1,
        num: 150,
        title: 'SOLUTION',
        img: sloution
    },
    {
        id: 2,
        num: 200,
        title: 'CUSTOMERS',
        img: customer
    },
    {
        id: 3,
        num: 250,
        title: 'PROJECTS',
        img: project
    }
]

const Projects = () => {
    return (
        <section className={`section ${style.projects}`} id='#projects'>
            <div className={`container ${style.container}`}>
                <header>
                    <h1>PROJECTS</h1>
                    <h2>OUR AMAZING WORKS</h2>
                </header>
                <section className={style.projectsContainer}>
                    {
                        projects.map(e => {
                            return (
                                <article className={style.project} key={e.id}>
                                    <section className={style.img}>
                                        <img src={e.img} alt='project' />
                                    </section>
                                    <section className={style.content}>
                                        <header>
                                            <h2>{e.title}</h2>
                                        </header>
                                        <p>{e.body}</p>
                                    </section>
                                </article>
                            )
                        })
                    }
                </section>
                <section className={style.facts}>
                    {
                        facts.map(e => {
                            return (
                                <article className={style.fact} key={e.id}>
                                    <section className={style.img}>
                                        <img src={e.img} alt={e.title} />
                                    </section>
                                    <section className={style.content}>
                                        <p>{e.num}</p>
                                        <h3>{e.title}</h3>
                                    </section>
                                </article>
                            )
                        })
                    }
                </section>
            </div>
        </section>
    )
}

export default Projects;