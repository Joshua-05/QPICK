import { create } from "zustand";
import { IProduct, ProductStore } from "../types";
import { persist } from "zustand/middleware";

export const useProductStore = create<ProductStore>()(persist((set, get) => ({
    productAll: [],
    addProduct: (product: IProduct) => {
        const { productAll } = get();
        
        const wasBorn = productAll.find(item => item.id === product.id)
        const newProduct = wasBorn ? 
            productAll.map(i => i.id === product.id ?
                 {...i, counter: i.counter + 1} : i) 
            : [...productAll, {...product, counter: 1}] 
        set({
            productAll: newProduct
        })
    },
    removeProduct: (id : number) => {
        const { productAll } = get();

        set({
            productAll: productAll.filter(item => item.id !== id),
        })
    },
    updateCounter: (id : number, sym: string) => {
        const { productAll } = get();
        const newProduct = sym === '-' ?
            productAll.map(i => i.id === id ? 
                {...i, counter: i.counter - 1} : i)
            : productAll.map(i => i.id === id ? 
                {...i, counter: i.counter + 1} : i)
        set({
            productAll: newProduct
        })        
    }
}), {
    name: 'ProductStore', 
    version: 1
}))