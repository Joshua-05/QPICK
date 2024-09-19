import { create } from "zustand";
import { ProductStore } from "../types";

export const useProductStore = create<ProductStore>((set, get) => ({
    product: [],
    addProduct: (products) => {
        const { product } = get();

        const newProduct = {
            ...products
        }
        const wasBorn = product.find(item => item.id == newProduct.id)
        !wasBorn && set({
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