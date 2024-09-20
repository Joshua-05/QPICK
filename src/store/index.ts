import { create } from "zustand";
import { ProductStore } from "../types";
import { persist } from "zustand/middleware";

export const useProductStore = create<ProductStore>()(persist((set, get) => ({
    product: [],
    addProduct: (products) => {
        const { product } = get();

        const newProduct = {
            ...products
        }
        const wasBorn = product.find(item => item.id == newProduct.id)
        !wasBorn && set({
            product: [newProduct, ...product],
        })
    },
    removeProduct: (id : number) => {
        const { product } = get();

        set({
            product: product.filter(item => item.id !== id),
        })
    }
}), {
    name: 'ProductStore', 
    version: 1
}))