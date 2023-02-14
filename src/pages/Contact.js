import { Typography } from '@mui/material';
import style from '../styles/contact.module.css';

const Contact = () => {
    return (
        <section className={`section ${style.contact}`} id='#contact'>
            <article className={style.container}>
                <header>
                    <Typography variant='h2' component='h1' gutterBottom>
                        مشروعك <span></span> <span>يستناك؟</span> 
                        لاتترد في <span></span> <span>التواصل</span> معنا
                    </Typography>
                </header>
            </article>
        </section>
    )
}

export default Contact;