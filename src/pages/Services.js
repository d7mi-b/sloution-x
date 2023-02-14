import style from '../styles/services.module.css';
import { useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

const services = [
    {
        id: 1,
        title: "الشركات",
        price: 4000,
        featurs: [
            {
                id: 1,
                title: "تصميم وتطوير الموقع"
            },
            {
                id: 2,
                title: "تسجيل نطاق (دومين) لمدة سنة"
            },
            {
                id: 3,
                title: "إستضافة لمدة سنة"
            }
        ],
        img: '/images/rocet.png'
    },
    {
        id: 2,
        title: "الشركات",
        price: 6000,
        featurs: [
            {
                id: 1,
                title: "تصميم وتطوير الموقع"
            },
            {
                id: 2,
                title: "تسجيل نطاق (دومين) لمدة سنة"
            },
            {
                id: 3,
                title: "إستضافة لمدة سنة"
            }
        ],
        img: '/images/companies.png'
    },
    {
        id: 3,
        title: "الأفراد",
        price: 3000,
        featurs: [
            {
                id: 1,
                title: "تصميم وتطوير الموقع"
            },
            {
                id: 2,
                title: "تسجيل نطاق (دومين) لمدة سنة"
            },
            {
                id: 3,
                title: "إستضافة لمدة سنة"
            }
        ],
        img: '/images/personal.png'
    }
]

const Services = () => {

    useEffect(() => {
        let section = document.getElementById('service');
        let services = document.querySelectorAll('.services_service__-Pabr')

        window.onscroll = () => {
            if (window.scrollY + 500 >= section.offsetTop) {
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
        <section className={`${style.services}`} id='service' >
            <div className={`container ${style.container}`}>
                <header>
                    <Typography variant='h2' component='h1' gutterBottom>
                        أختر الباقة اللي <span></span><span>تناسبك</span>
                    </Typography>
                    <Typography variant='h5' component='p' gutterBottom >
                        نقدم الأفضل لعملائنا من خلال فريق عمل متميز يتمتع بالخبرة و الكفاءة اللازمة 
                        لتقديم الخدمة بالمستوى الذي يتطلع إليه المستخدم العربي
                    </Typography>
                </header>
                <section className={style.serviceContiner}>
                    {
                        services.map(e => {
                            return (
                                <Card className={style.service} key={e.id}>
                                    <Typography variant='h4' component='h1' gutterBottom>{e.title}</Typography>
                                    <CardContent className={style.img}>
                                        <CardMedia component='img' image={e.img} alt='service' />
                                    </CardContent>
                                    <CardContent>
                                        <Typography variant='h4' component='p' gutterBottom>{e.price} <sub>ريال سعودي</sub></Typography>
                                        {
                                            e.featurs.map(featur => {
                                                return (
                                                    <Typography className={style.featurs} variant='body1' gutterBottom key={featur.id}>
                                                        <img src='/images/check.png' alt='check' />
                                                        {featur.title}
                                                    </Typography>
                                                )
                                            })
                                        }
                                        <Button variant="outlined"><Link to='contact'>أنطلق</Link></Button>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </section>
            </div>
        </section>
    )
}

export default Services;