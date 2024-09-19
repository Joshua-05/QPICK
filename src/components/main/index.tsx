import style from "./style.module.css"
import ProductCard from "../ProductCard/index"
import { Header, Footer } from "../wrap"
import {productList} from "../../data/index"

export default function MainPage(){
    return(
        <>
            <Header />
            <main>
                <h1>Наушники</h1>
                <div className={style.containerOne}>
                    {productList.map(product => product.class === "airPods" && <ProductCard product={product} key={product.id}/>)}
                </div>
                <h1>Беспроводные наушники</h1>
                <div className={style.containerOne}>
                    {productList.map(product => product.class === "unAirPods" && <ProductCard product={product} key={product.id}/>)}
                </div>
            </main>
            <Footer />
        </>
    )
}