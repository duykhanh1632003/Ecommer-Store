import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { removeFromCart, increaseCart, decreaseCart, clearCart, getTotals } from "../features/cartSlice";
import { useEffect } from "react";
const Cart = () => {

    
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleIncrease = (cartItem) => {
        dispatch(increaseCart(cartItem))
    }
    const handleDecrease = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }
    const handeDeleteAllItem = (cartItem) => {
        dispatch(clearCart())
    }
    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Giỏ hàng trống</p>
                    <div className="start-shopping">
                        <Link to="/" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                            <span>Bắt đầu shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (<div>
                <div className="titles">
                    <h3 className="product-title">
                        Sản phẩm
                    </h3>
                    <h3 className="price">
                        Giá
                    </h3>
                    <h3 className="quantity">
                        Số lượng
                    </h3>
                    <h3 className="total">
                        Tổng giá tiền
                    </h3>
                </div>
                <div className="cart-items">
                    {cart.cartItems?.map(cartItem => (
                        <div className="cart-item" key={cartItem.id}>
                            <div className="cart-product">
                                <img src={cartItem.image} alt={cartItem.name} />
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <p>{cartItem.desc}</p>
                                    <button onClick={() => handleRemoveFromCart(cartItem)}>Loại bỏ</button>
                                </div>
                            </div>
                            <div className="cart-product-price">
                                ${cartItem.price}
                            </div>
                            <div className="cart-product-quantity">
                                <button onClick={() => handleIncrease(cartItem)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </button>
                                <div className="count">{cartItem.cartTotalQuantity}</div>
                                <button onClick={() => handleDecrease(cartItem)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="cart-product-total-price">
                                ${cartItem.price * cartItem.cartTotalQuantity}
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="cart-summary">
                        <button className="clear-btn" onClick={() => handeDeleteAllItem()}>Bỏ hết tất cả</button>
                        <div className="cart-checkout">
                            <div className="subtotal">
                                <span>Tổng phụ</span>
                                <span className="amount">
                                    ${cart.cartTotalAmount}
                                </span>
                            </div>
                            <p>Thuế và giá ship sẽ tính sau khi submit</p>
                            <button>Check out</button>
                            <div className="continue-shopping">
                                <Link to="/" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                    <span>Tiếp tục mua sắm</span>
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>)}
        </div>);
}

export default Cart;