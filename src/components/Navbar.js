import logo from '../images/logo.png';
import search from '../images/magnifying-glass.png'
import style from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <section className={style.logo}>
                <img src={logo} alt="sloution x" />
            </section>
            <ul className={style.list}>
                <li className={style.active}><a href='#home'>HOME</a></li>
                <li><a href='#about'>ABOUT</a></li>
                <li><a href='#projects'>PROJECTS</a></li>
                <li><a href='#service'>SERVICE</a></li>
                <li><a href='#contact'>CONTACT</a></li>
                <li className={style.searchSec}>
                    <input type='search' name='search' id='search-input' />
                    <div>
                        <img src={search} alt='search' />
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;