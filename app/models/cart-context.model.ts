import { Dispatch, SetStateAction } from "react"
import { CartItem } from "./cart-item.model"
import { Product } from "./product.model"

export interface CartContextType {
    isOpen: boolean,
    cartItems: CartItem[]
    setIsOpen: (value: boolean) => void
    addCartItem: (product: Product) => void
    setCartItems: Dispatch<SetStateAction<CartItem[]>>
    deleteCartItem: (product: Product) => void
}