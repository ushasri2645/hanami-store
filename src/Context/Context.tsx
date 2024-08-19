import React, { Component, Dispatch, createContext, useReducer } from "react";



type cartContextType={
    cart:{
        id:number,
        quantity:2
    
    }[],
    dispatch:Dispatch<any>
}

export const CartContext=createContext<cartContextType|undefined>(undefined);

export const cartReducer = (state: any, action: any) => {
    switch (action.type) {
        case "+":
            return [...state, action.item];
        case "-":
            return state.filter((p: any) => p.id !== action.id);
        default:
            return;
    }
};

const ContextProvider = ({children}:{children:any}) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    return (
        <CartContext.Provider value={{cart,dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default ContextProvider;
