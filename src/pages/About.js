import aboutImg from '../images/domenico-loia-hGV2TfOh0ns-unsplash.png';
import style from '../styles/about.module.css';

const About = () => {
    return (
        <section className={`section ${style.about}`}>
            <div className={`container ${style.container}`}>
                <div className={`${style.img}`}>
                    <img src={aboutImg} alt='About' />
                </div>
                <article className={`${style.content}`}>
                    <header>
                        <h1>ABOUT US</h1>
                    </header>
                    <p>
                        A technical company that provides 
                        technical support, solves software 
                        problems, and builds applications 
                        and websites 
                    </p>
                    <button>READ MORE</button>
                </article>
            </div>
        </section>
    )
}

export default About;