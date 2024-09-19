import { ProductProps } from "../../types";
import style from "./style.module.css"
import star from "../../assets/Vector.png"
import { useProductStore } from "../../store";

export default function ProductCard({product}: ProductProps){
    const storeProduct= useProductStore(state => state.addProduct)
    return(
        <div className={style.card}>
            <div className={style.imgProduct}>
                <img src={product.img}  alt="" />
            </div>
            <div className={style.container}>
                <p>{product.name}</p>
                <div className={style.price}>
                    <span className={style.price}>{product.price} ₽</span> <br />
                    {product.oldPrice && <span className={style.newPrice}>{product.oldPrice} ₽</span> }
                </div>
            </div>
            <div className={style.container_bottom}>
                <span><img src={star} alt="" />{product.rating}</span>
                <button onClick={() => {
                    storeProduct(product)
                }}>Купить</button>
            </div>
        </div>
    )
}