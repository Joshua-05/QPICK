import { create } from "zustand";
import { ProductStore } from "../types";

export const useProductStore = create<ProductStore>((set, get) => ({
    product: [],
    addProduct: (products) => {
        const { product } = get();

        const newProduct = {
            id: products.id,
            name: products.name,
            price: products.price,
            rating: products.rating,
            img: products.img,
            class: products.class
        }

        set({
            product: [newProduct].concat(product),
        })
    },
    removeProduct: (id : number) => {
        const { product } = get();

        set({
            product: product.filter(item => item.id !== id),
        })
    }
}))