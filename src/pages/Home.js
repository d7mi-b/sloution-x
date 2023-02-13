import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import style from '../styles/home.module.css';

const Home = () => {
    return (
        <section className={`section ${style.home}`}>
            <section className="container">
                <Navbar />
                <article className={style.landding}>
                    <section className={style.img} >
                        <img src="/images/devices.png" alt="devices" />
                    </section>
                    <header className={style.header} >
                        <Typography variant="h1" gutterBottom>
                            نجعل من المشكلة لا شي !
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            حــلـــــول بـرمـجـــيـــة وخـــدمات تصــميـــم و تـــطوير الـمواقـع 
                            الإلكترونية وتطـبيقـات الجوال بمظهر عصـري و إستخدام ادوات التــكنولوجيا 
                            المتطورة في مجال المواقع. 
                        </Typography>
                    </header>
                </article>
            </section>
        </section>
    );
}

export default Home;