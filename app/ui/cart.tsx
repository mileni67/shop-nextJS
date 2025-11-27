'use client'

import { useCart } from "../providers/CartProvider"

export default function Cart() {
    const { cartItems, isOpen, setIsOpen, deleteCartItem } = useCart()

    return (
        <>
            <div className="cart" style={{ display: isOpen ? 'flex' : 'none' }}>
                <div className="cart-body">
                    <div className="cart-title">Корзина</div>
                    <div className="cart-total">
                        Общая сумма ({cartItems.reduce((sum, item) => sum + item.count, 0)} шт):
                        <span>
                            {cartItems.reduce((sum, item) => sum + item.price * item.count, 0)} ₽
                        </span>
                    </div>

                    <div className="cart-wrapper"></div>
                    {cartItems.map(product => (
                        <div className="card" key={product.id}>
                            {product.sale ? <div className="card-sale">🔥Hot Sale🔥</div> : ""}

                            <div className="card-img-wrapper">
                                <span className="card-img-top"
                                    style={{ backgroundImage: `url(${product.img})` }}
                                ></span>
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
                                <button className="btn btn-primary" onClick={() => deleteCartItem(product)}>Удалить</button>
                            </div>
                        </div>
                    ))}
                    {
                        !cartItems.length ? (<div id="cart-empty">Ваша корзина пока пуста</div>) : null
                    }
                    <button className="btn btn-primary cart-confirm" onClick={() => setIsOpen(false)}>Оформить заказ</button>
                    <div className="cart-close" onClick={() => setIsOpen(false)}></div>
                </div>
            </div>
        </>
    )
}