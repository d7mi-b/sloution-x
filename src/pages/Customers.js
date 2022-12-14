import style from '../styles/customers.module.css';
import customer1 from '../images/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-sel.png';
import customer2 from '../images/portrait-beautiful-girl-white-background.png';
import quote from '../images/quote.png';
import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';

const customers = [
    {
        id: 1,
        body: 'A technical  company   that provides  technical support, solves  software   problems, and builds applications and websites',
        name: 'Hashim Alhaddad',
        img: customer1
    },
    {
        id: 2,
        body: 'A technical  company   that provides  technical support, solves  software   problems, and builds applications and websites',
        name: 'Hassan Alhamed',
        img: customer1
    },
    {
        id: 3,
        body: 'A technical  company   that provides  technical support, solves  software   problems, and builds applications and websites',
        name: 'Nouf Alamoudi',
        img: customer2
    },
]

const Customers = () => {
    return (
        <section className={`section ${style.customers}`}>
            <div className={`container ${style.container}`}>
                <section className={`${style.btn}`}>
                    <img src={leftArrow} alt="left arrow" />
                </section>
                <section className={style.customersContainer}>
                    {
                        customers.map(e => {
                            return (
                                <article className={style.customer} key={e.id}>
                                    <img className={style.quote} src={quote} alt="quote" />
                                    <p>{e.body}</p>
                                    <section className={style.info}>
                                        <img src={e.img} alt={e.name} />
                                        <p>{e.name}</p>
                                    </section>
                                </article>
                            )
                        })
                    }
                </section>
                <section className={`${style.btn}`}>
                    <img src={rightArrow} alt="right arrow" />
                </section>
            </div>
        </section>
    )
}

export default Customers;