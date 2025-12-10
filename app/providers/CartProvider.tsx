'use client';

import { createContext, ReactNode, useContext, useState } from "react";
import { CartContextType } from "../models/cart-context.model";
import { CartItem } from "../models/cart-item.model";
import { Product } from "../models/product.model";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('Компонент не обгорнутий в <CartProvider>.');
    }
    return context;
};

export default function CartProvider({ children }: { children: ReactNode }) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addCartItem = (product: Product) => {
        setCartItems(prev => {
            const existing = prev.find(p => p.id === product.id);
            if (existing) {
                return prev.map(p =>
                    p.id === existing.id
                        ? { ...p, count: p.count + 1 }
                        : p
                );
            }

            return [...prev, { ...product, count: 1 }];
        });
    };

    const deleteCartItem = (product: Product) => {
        setCartItems(prev => {
            const existing = prev.find(p => p.id === product.id);
            if (!existing) return prev;

            if (existing.count > 1) {
                return prev.map(p =>
                    p.id === existing.id
                        ? { ...p, count: p.count - 1 }
                        : p
                );
            }
            return prev.filter(p => p.id !== product.id);
        });
    };

    return (
        <CartContext.Provider
            value={{
                isOpen,
                cartItems,
                setCartItems,
                setIsOpen,
                addCartItem,
                deleteCartItem
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
