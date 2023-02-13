import { Typography } from '@mui/material';
import style from '../styles/about.module.css';

const About = () => {
    return (
        <section className={`section ${style.about}`}>
            <article className={style.content}>
                <header className={style.header}>
                    <Typography variant='h2' component='h1' gutterBottom>
                        ايش ممكن <span>نقدم</span> لك؟
                    </Typography>
                </header>
            </article>
        </section>
    )
}

export default About;