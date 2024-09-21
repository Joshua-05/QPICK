export interface IProduct {
    id: number,
    name: string,
    price: number,
    oldPrice?: number,
    rating: number,
    img: string,
    class: string
}

export interface ProductProps{
    product: IProduct,
    
}

export interface IPropsBusket{
    yyy: (productPrice: number, action: string) => void
    product: IProductStore
}

export interface IProductStore{
    id: number,
    name: string,
    price: number,
    oldPrice?: number,
    rating: number,
    img: string,
    class: string
    counter: number
}

export interface ProductStore{
    productAll: IProductStore[],
    addProduct: (product : IProduct) => void,
    removeProduct: (id: number) => void,
    updateCounter: (id: number, sym: string) => void
}