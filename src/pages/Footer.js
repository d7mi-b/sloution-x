import style from '../styles/footer.module.css';
import { WhatsApp, Facebook, Instagram, Twitter } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Footer = () => {
    return (
        <footer className={`${style.footer}`}>
            <header className={style.logo}>
                <img src='/images/white logo.png' alt='Solution X' />
            </header>
            <section className={style.iconsContainer}>
                <IconButton aria-label="whatsapp" href='http://wa.me/+966559047929'>
                    <WhatsApp />
                </IconButton>
                <IconButton aria-label="facebook" href='http://www.facebook.com'>
                    <Facebook />
                </IconButton>
                <IconButton aria-label="instagram" href='http://www.instagram.com'>
                    <Instagram />
                </IconButton>
                <IconButton aria-label="twitter" href='http://www.twitter.com'>
                    <Twitter />
                </IconButton>
            </section>
            <section className={style.copyright}>
                <p>الحقوق محفوظة <span>&copy;</span> X Solution</p>
            </section>
        </footer>
    );
}

export default Footer;