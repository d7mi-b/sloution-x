import style from '../styles/footer.module.css';
import logo from '../images/xx.png';
import instgram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import email from '../images/mail.png';

const Footer = () => {
    return (
        <footer className={`${style.footer}`}>
            <div className={`container ${style.container}`}>
                <section className={style.iconsContainer}>
                    <img src={logo} alt='X Sloution' />
                    <section className={style.icons}>
                        <a href='http://instgram.com' target={`_blank`}><img src={instgram} alt='instgram' /></a>
                        <a href='http://wa.me/+00965585858' target={`_blank`}><img src={whatsapp} alt='whatsapp' /></a>
                        <a href='http://wa.me/+00965585858' target={`_blank`}><img src={whatsapp} alt='whatsapp' /></a>
                    </section>
                </section>

                <section className={`${style.contentUs} ${style.content}`}>
                    <header>
                        <h2>CONTACT US</h2>
                    </header>
                    <p>hashim.g.h@gmail.com</p>
                    <p>00965585858</p>
                    <p>00965585858</p>
                </section>

                <section className={`${style.subscribe} ${style.content}`}>
                    <header>
                        <h2>SUBSCRIBE</h2>
                    </header>
                    <p>enter your email to get newsabout our solution</p>
                    <form>
                        <section className={style.email}>
                            <img src={email} alt='email' />
                            <input type='email' name='email' />
                        </section>
                        <button>SUB</button>
                    </form>
                </section>

                <footer className={style.copyright}>
                    <p><span>&copy;</span> ALL COPY RIGHT BY X SOLUTION</p>
                </footer>
            </div>
        </footer>
    );
}

export default Footer;