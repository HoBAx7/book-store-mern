import { createSlice } from '@reduxjs/toolkit'

import Swal from 'sweetalert2'


export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems: []
    },
    reducers: {
        addToCart: (state, actions) => {
            const existingItem = state.cartItems.find(item => item._id === actions.payload._id);
            if(!existingItem) { 
                state.cartItems.push(actions.payload);
                // alert('item Added Successfully'); 
                Swal.fire({
                    title: "book Add to Cart",
                    icon: "success",
                    draggable: true 
                });
            }else{  
                Swal.fire({
                    title: "product already exist !",
                    icon: "warning",
                    draggable: true 
                });
                // position: "top-end",
                // icon: "success",
                // title: "Your work has been saved",
                // showConfirmButton: false,
                // timer: 1500
            } 
        },

        removeFromCart: (state, actions) => {
            state.cartItems = state.cartItems.filter(item => item._id !== actions.payload._id)
        },

        clearCart: (state) => {
            state.cartItems = [];
        }
    }
})

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions; // export Action
export  default cartSlice.reducer;