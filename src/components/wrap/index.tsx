import likes from "../../assets/likes.svg"
import busket from "../../assets/busket.svg"
import vk from "../../assets/VK.svg"
import telegram from "../../assets/Telegram.svg"
import whatsapp from "../../assets/Whatsapp.svg"
import group from "../../assets/Group.png"
import style from "./style.module.css"
import { Link } from "react-router-dom"
import { useProductStore } from "../../store"

export function Header() {
    const productStore = useProductStore(state => state.product)
    return(
        <header>
            <div className={style.logo}><Link to={"/"}>QPICK</Link></div>
            <div className={style.nav}>
                <img className={style.likesImg} src={likes} alt="" />
                <div className={style.busketImg}>
                    <Link to={"/busket"}><img src={busket} alt="" /></Link>
                    {productStore.length !== 0 && <div className={style.counter}>{productStore.length}</div>}
                </div>
            </div>
        </header>
    )
}

export function Footer() {
    return(
        <footer>
            <div className={style.logo}>QPICK</div>
            <div className={style.nav_but}>
                <div className={style.ko}>
                    <Link to={"/"}>Избранное</Link>
                    <Link to={"/busket"}>Корзина</Link>
                    <Link to={"/"}>Контакты</Link>
                </div>
            </div>
            <div className={style.setting}>
                <Link to={"/"}>Условия сервиса</Link>
                <div className={style.lang}>
                    <img src={group} alt="" />
                    <button>Рус</button>
                    <button>Eng</button>
                </div>
            </div>
            <div className={style.contact}>
                <Link target="blank" to={"https://vk.com/neoflex_ru"}><img src={vk} alt="" /></Link>
                <Link target="blank" to={"https://t.me/neoflex_neostudy_bot"}><img src={telegram} alt="" /></Link>
                <Link target="blank" to={"https://web.whatsapp.com/"}><img src={whatsapp} alt="" /></Link>
            </div>
        </footer>
    )
}