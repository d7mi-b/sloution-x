import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect } from 'react';
import style from '../styles/about.module.css';

const services = [
    {
        id: 1,
        title: 'حلول تقنية',
        img: '/images/solve.png'
    },
    {
        id: 2,
        title: 'تصميم ونطوير المواقع',
        img: '/images/web.png'
    },
    {
        id: 3,
        title: 'تطوير تطبيقات الجوال',
        img: '/images/mobile.png'
    }
]

const About = () => {

    useEffect(() => {
        let section = document.getElementById('serviceContainer');
        let services = document.querySelectorAll('.about_service__d0NNQ')

        window.onscroll = () => {
            if (window.scrollY + 600 >= section.offsetTop) {
                services.forEach(e => {
                    e.classList.add('services_serviceAnimation__YpEGa');
                })
            }
            else if (window.scrollY < section.offsetTop) {
                services.forEach(e => {
                    e.classList.remove('services_serviceAnimation__YpEGa');
                })
            }
        }
    }, [])

    return (
        <section className={`section ${style.about}`}>
            <article className={style.content}>
                <header className={style.header}>
                    <Typography variant='h2' component='h1' gutterBottom>
                        ايش ممكن <span></span><span>نقدم</span> لك؟
                    </Typography>
                </header>
                <Typography variant='body1'>
                    نقدم الأفضل لعملائنا من خلال فريق عمل متميز يتمتع بالخبرة و الكفاءة اللازمة 
                    لتقديم الخدمة بالمستوى الذي يتطلع إليه المستخدم العربي
                </Typography>

                <section className={style.servicesContainer} id='serviceContainer'>
                    {
                        services.map(e => {
                            return (
                                <Card sx={{ maxWidth: 345 }} className={style.service} key={e.id}>
                                    <CardContent>
                                        <CardMedia component='img' image={e.img} alt='service' />
                                    </CardContent>
                                    <CardContent>
                                        <Typography variant='h5' gutterBottom >{e.title}</Typography>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </section>
            </article>
        </section>
    )
}

export default About;