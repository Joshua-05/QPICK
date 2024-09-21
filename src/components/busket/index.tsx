import BusketCard from "../BusketCard"
import { Header, Footer } from "../wrap"
import style from "./style.module.css"
import { useProductStore } from "../../store"
import { useState } from "react"

export default function BusketPage(){
    const productStore = useProductStore(state => state.productAll)
    const totalPrice = productStore.map(item => item.price * item.counter).reduce((acc, number) => acc + number, 0);
    const [price, setPrice] = useState(totalPrice)

    const yyy = (productPrice: number, action: string) => {
        switch (action) {
            case 'descrement': {
                return setPrice(price - productPrice)
            }
            case "increment": {
                return setPrice(price + productPrice)
            }
            case "allDescrement": {
                return setPrice(price -  productPrice)
            }
        }
    }
    return(
        <>
            <Header />
                <h1>Корзина</h1>
                <div className={style.busket}>
                    <div>
                        {productStore[0] ? productStore.map(product => <BusketCard product={product} yyy={yyy} key={product.id} />) : "Нет добавленных товаров"}
                    </div>
                    <div className={style.payment}>
                        <div className={style.itog}>
                            <div className={style.price}>
                                <p>ИТОГО</p>
                                <p>₽ {price}</p>
                            </div>
                            <button>Перейти к оформлению</button>
                        </div>
                        
                    </div>
                </div>
            <Footer />
        </>
    )
}