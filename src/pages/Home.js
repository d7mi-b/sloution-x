import Navbar from "../components/Navbar";
import style from '../styles/home.module.css';

const Home = () => {
    return (
        <section className={`section ${style.home}`}>
            <section className="container">
                <Navbar />
                <article className={style.landding}>
                    <header>
                        <h1>
                            WE MAKE PROBLEM OUT OF NOTHING
                        </h1>
                        <p>
                            we provide technical solutions for all problems
                        </p>
                    </header>
                </article>
            </section>
        </section>
    );
}

export default Home;