import { Typography, Box, TextField, TextareaAutosize, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
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

                <Box 
                    action="https://fabform.io/f/HDIt9Of"
                    method='POST'
                    component="form" 
                    autoComplete="off" 
                    className={style.formContent}
                >
                    <section className={style.contnet}>
                        <section className={style.input}>
                            <label htmlFor='name'>الأسم</label>
                            <TextField required name='name' type='text' size="small" gutterBottom />
                        </section>
                        <section className={style.input}>
                            <label htmlFor='phone'>رقم الجوال</label>
                            <TextField required name='phone' type='tel' size="small" gutterBottom />
                        </section>
                        <section className={style.input}>
                            <label htmlFor='email'>البريد الألكتروني</label>
                            <TextField required name='email' type='email' size="small" gutterBottom />
                        </section>
                        <section className={style.input}>
                            <label htmlFor='service'>الخدمة المطلوبة</label>
                            <TextField name='service' type='text' required size="small" gutterBottom />
                        </section>
                    </section>
                    <section className={style.input}>
                        <label htmlFor='idea'>فكرة المشروع</label>
                        <TextareaAutosize name='idea' type='text' required size="small" gutterBottom  />
                    </section>
                    <section className={style.buttonContainer}>
                        <Button type='submit' variant="contained" endIcon={<SendIcon />} dir='ltr' gutterBottom>إرسال</Button>
                    </section>
                </Box>
            </article>
        </section>
    )
}

export default Contact;