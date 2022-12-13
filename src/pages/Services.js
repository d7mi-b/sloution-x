import style from '../styles/services.module.css';
import tecnecal from '../images/solution.png';
import website from '../images/internet.png';
import apps from '../images/add.png';

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
    return (
        <section className={`section ${style.services}`}>
            <div className={`container ${style.container}`}>
                <header>
                    <h1>OUR SERVICE</h1>
                </header>
                <section className={style.serviceContiner}>
                    {
                        services.map(e => {
                            return (
                                <article className={style.service}>
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