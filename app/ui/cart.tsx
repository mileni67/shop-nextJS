'use client';

import { useCart } from "../providers/CartProvider";
import { useState } from "react";

export default function Cart() {
    const { cartItems, isOpen, setIsOpen, deleteCartItem, setCartItems } = useCart();
    const [message, setMessage] = useState<string | null>(null);

    const handleCheckout = () => {
        if (!cartItems.length) return;

        // Створюємо нове замовлення
        const order = {
            items: cartItems,
            total: cartItems.reduce((sum, item) => sum + item.price * item.count, 0),
            date: new Date().toISOString()
        };

        // Зберігаємо в localStorage
        const prevOrders = JSON.parse(localStorage.getItem('orders') || "[]");
        localStorage.setItem('orders', JSON.stringify([order, ...prevOrders]));

        // Очищаємо корзину та закриваємо модалку
        setCartItems([]);
        setIsOpen(false);

        // Показуємо тост-повідомлення
        setMessage("Ваше замовлення успішно оформлено!");
        setTimeout(() => setMessage(null), 3000);
    };

    return (
        <>
            {/* Тост-повідомлення поверх сторінки */}
            {message && (
                <div className="cart-message">
                    {message}
                </div>
            )}

            {/* Модалка корзини */}
            <div className="cart" style={{ display: isOpen ? 'flex' : 'none' }}>
                <div className="cart-body">
                    <div className="cart-title">Корзина</div>

                    <div className="cart-total">
                        Общая сумма ({cartItems.reduce((sum, item) => sum + item.count, 0)} шт):
                        <span>{cartItems.reduce((sum, item) => sum + item.price * item.count, 0)} ₽</span>
                    </div>

                    <div className="cart-wrapper">
                        {cartItems.map(product => (
                            <div className="card" key={product.id}>
                                {product.sale && <div className="card-sale">🔥Hot Sale🔥</div>}
                                <div className="card-img-wrapper">
                                    <span
                                        className="card-img-top"
                                        style={{ backgroundImage: `url(${product.img})` }}
                                    />
                                </div>
                                <div className="card-body justify-content-between">
                                    <div className="card-price">
                                        <span className="price">{product.price} ₽</span>
                                        <span className="multiply">×</span>
                                        <span className="count">{product.count}</span>
                                        <span className="equals">=</span>
                                        <span className="total">{product.price * product.count} ₽</span>
                                    </div>
                                    <h5 className="card-title">{product.title}</h5>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => deleteCartItem(product)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {!cartItems.length && (
                        <div id="cart-empty">Ваша корзина пока пуста</div>
                    )}

                    <button
                        className="btn btn-primary cart-confirm"
                        onClick={handleCheckout}
                        disabled={!cartItems.length}
                    >
                        Оформить заказ
                    </button>

                    <div className="cart-close" onClick={() => setIsOpen(false)}></div>
                </div>
            </div>
        </>
    );
}
