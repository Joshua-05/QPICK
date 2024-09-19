import style from "./style.module.css"
import minus from "../../assets/-.svg"
import plus from "../../assets/+.svg"
import trash from "../../assets/trash.svg"
import { FC, useState } from "react"
import { IPropsBusket } from "../../types"
import { useProductStore } from "../../store"

const BusketCard : FC<IPropsBusket> = (props: IPropsBusket)  => {

    const product = props.product
    const yyy = props.yyy
    const idStore = useProductStore(state => state.removeProduct)

    const [count, setCount] = useState(1)
    const [allCount, setAllCount] = useState(product.price)

    const descrement = () => {
        setAllCount(allCount - product.price)
        setCount(count-1)
        yyy(product.price, 'descrement')
    }

    const increment = () => {
        setAllCount(allCount + product.price)
        setCount(count + 1)
        yyy(product.price, 'increment')
    }

    return(
        <div className={style.busketCard}>
            <div className={style.container}>
                <img src={product.img} alt="" />
                <div className={style.productInf}>
                    <p>{product.name}</p>
                    <span>{product.price} ₽</span>
                </div>
                <button onClick={() => {
                    idStore(product.id),
                    yyy(allCount, 'allDescrement')
                }}><img src={trash} alt="" /></button>
            </div>
            <div className={style.containerBottom}>
                <div className={style.count}>
                    <button onClick={() => {
                        count == 1 ? null : descrement()
                        }}>
                        <img src={minus} alt="" />
                    </button>
                    <p>{count}</p>
                    <button onClick={() => {
                        increment()
                    }}>
                        <img src={plus} alt="" />
                    </button>
                </div>
                <p>{allCount} ₽</p>
            </div>
        </div>
    )
}

export default BusketCard