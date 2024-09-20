
export interface IProduct {
    id: number,
    name: string,
    price: number,
    oldPrice?: number,
    rating: number,
    img: string,
    class: string,
}

export interface ProductProps{
    product: IProduct,
    
}

export interface IPropsBusket{
    yyy: (productPrice: number, action: string) => void
    product: IProduct
}

export interface ProductStore{
    product: IProduct[],
    addProduct: (product : IProduct) => void,
    removeProduct: (id: number) => void
}