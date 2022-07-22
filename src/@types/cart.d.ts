// cart.type.ts //
export interface ICart{
    img: string
    price: number
    productname: string
    

}

export type CartContextType = {
    cart: ICart[];
    addToCart: () => void
}