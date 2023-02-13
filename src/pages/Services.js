import style from '../styles/services.module.css';
import { useEffect } from 'react';

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
                    
                </section>
            </div>
        </section>
    )
}

export default Services;