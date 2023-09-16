import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.cartTotalQuantity += 1;
                toast.info(`Thêm ${existingItem.name}`);
            } else {
                const newItem = { ...action.payload, cartTotalQuantity: 1 };
                state.cartItems.push(newItem);
                toast.success(`Thêm ${newItem.name} thành công`);
            }
        },
        removeFromCart(state, action) { 
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            );
            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.success(`Xóa thành công`)
        },
        decreaseCart(state, action) { 
            const itemIndex = state.cartItems.findIndex(
                cartItem =>cartItem.id === action.payload.id
            )
            if (state.cartItems[itemIndex].cartTotalQuantity > 1) {
                state.cartItems[itemIndex].cartTotalQuantity -=1 
            }

        },
        increaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
                state.cartItems[itemIndex].cartTotalQuantity += 1
        },
        clearCart(state, action) { 
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        // getTotals(state, action) {
        //     let { total, quantity } = state.cartItems.reduce(
        //         (cartTotal, cartItem) => {
        //             const { price, cartTotalQuantity } = cartItem; // Đảm bảo bạn có thuộc tính cartTotalQuantity
        //             const itemTotal = price * cartTotalQuantity;

        //             cartTotal.total += itemTotal;
        //             cartTotal.quantity += cartTotalQuantity;

        //             return cartTotal;
        //         },
        //         {
        //             total: 0,
        //             quantity: 0,
        //         }
        //     );
        //     total = parseFloat(total.toFixed(2));
        //     state.cartTotalQuantity = quantity;
        //     state.cartTotalAmount = total;
        // },
    }
})

    
export const { addToCart, removeFromCart, decreaseCart, increaseCart, clearCart } = cartSlice.actions


export default cartSlice.reducer

