import style from '../styles/navbar.module.css';
import { Button } from '@mui/material'
import Scroll from 'react-scroll';
import Link from 'react-scroll/modules/components/Link';

const ScrollLink = Scroll.Link;

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <section className={style.logo}>
                <img src='/images/x solution.png' alt="sloution x" />
            </section>

            <section className={style.navList}>
                <div className={style.bar}>
                    <img src='/menu.png' alt='mune' />
                </div>
                <ul className={style.list}>
                    <li className={style.active}>
                        <ScrollLink 
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >
                            الرئيسية
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            duration={600} 
                        >
                            نبذه عننا
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="service" 
                            spy={true} 
                            smooth={true} 
                            duration={700} 
                        >
                            خدماتنا
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            duration={800} 
                        >
                            أعمالنا
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            duration={900} 
                        >
                            تواصل معنا
                        </ScrollLink>
                    </li>
                </ul>
            </section>

            <section className={style.buttons}>
                <Button variant='contained' className={style.btn}>
                    <Link to='contact'>طلب عرض سعر</Link>
                </Button>
            </section>
        </nav>
    );
}

export default Navbar;