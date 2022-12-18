import style from '../styles/services.module.css';
import tecnecal from '../images/solution.png';
import website from '../images/internet.png';
import apps from '../images/add.png';
import { useEffect } from 'react';

const services = [
    {
        id: 1,
        title: 'technical solutions',
        body: 'A technical company that provides technical support, solves software problems, and builds applications and websites',
        img: tecnecal,
    },
    {
        id: 2,
        title: 'building websites',
        body: 'A technical company that provides technical support, solves software problems, and builds applications and websites',
        img: website,
    },
    {
        id: 3,
        title: 'Mobile applications',
        body: 'A technical company that provides technical support, solves software problems, and builds applications and websites',
        img: apps,
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
                    <h1>OUR SERVICE</h1>
                </header>
                <section className={style.serviceContiner}>
                    {
                        services.map(e => {
                            return (
                                <article className={`${style.service}`} key={e.id}>
                                    <section className={style.img}>
                                        <img src={e.img} alt='' />
                                    </section>
                                    <header>
                                        <h3>{e.title}</h3>
                                    </header>
                                    <p>{e.body}</p>
                                </article>
                            )
                        })
                    }
                </section>
            </div>
        </section>
    )
}

export default Services;