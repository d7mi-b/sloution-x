import logo from '../images/logo.png';
import search from '../images/magnifying-glass.png'
import style from '../styles/navbar.module.css'
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <section className={style.logo}>
                <img src={logo} alt="sloution x" />
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
                            HOME
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            duration={600} 
                        >
                            ABOUT
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            duration={800} 
                        >
                            PROJECTS
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="service" 
                            spy={true} 
                            smooth={true} 
                            duration={700} 
                        >
                            SERVICE
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            duration={900} 
                        >
                            CONTACT
                        </ScrollLink>
                    </li>
                    <li className={style.searchSec}>
                        <input type='search' name='search' id='search-input' />
                        <div>
                            <img src={search} alt='search' />
                        </div>
                    </li>
                </ul>
            </section>
        </nav>
    );
}

export default Navbar;