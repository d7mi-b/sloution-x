import { Card, CardMedia, Typography } from '@mui/material';
import style from '../styles/projects.module.css';

const projects = [
    {
        id: 1,
        img: '/images/BMW.png'
    },
    {
        id: 2,
        img: '/images/logo.png'
    },
    {
        id: 1,
        img: '/images/vw.png'
    }
]

const Projects = () => {
    return (
        <section className={`section ${style.projects}`} id='#projects'>
            <section className={style.container}>
                <Typography variant='h2' component='h1' gutterBottom>
                    مشاريع نعتز بها
                </Typography>
                <section className={style.projectsContainer}>
                    {
                        projects.map(e => {
                            return (
                                <Card className={style.project} key={e.id}>
                                    <CardMedia component='img' image={e.img} alt='project' />
                                </Card>
                            )
                        })
                    }
                </section>
            </section>
        </section>
    )
}

export default Projects;