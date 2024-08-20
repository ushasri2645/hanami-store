import React, { Component, Dispatch, createContext, useReducer } from "react";

type cartContextType = {
    cart: {
        id: number;
        quantity: 2;
    }[];
    dispatch: Dispatch<any>;
};

type wishlistType = {
    wishlist: number[];
    WishListdispatch: Dispatch<any>;
};

type notificationType = {
    notificationItems: number[];
    Notificationdispatch: Dispatch<any>;
};

export const CartContext = createContext<cartContextType | undefined>(
    undefined
);
export const WishListContext = createContext<wishlistType | undefined>(
    undefined
);

export const NotificationContext = createContext<notificationType | undefined>(undefined);

export const notificationReducer = (state: any, action: any) => {
    switch (action.type) {
        case "NOTIFY":
            return [...state, action.id];
        default:
            return state;
    }
};
export const cartReducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state, action.item];
        case "REMOVE_FROM_CART":
            return state.filter((p: any) => p.id !== action.id);
        default:
            return state;
    }
};

export const wishListreducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            if (!state.some((item: any) => item.id === action.item.id)) {
                return [...state, action.item.id];
            }
            return state;
        case "REMOVE_FROM_WISHLIST":
            console.log(state);
            console.log("came to remove");
            return state.filter((id: number) => id !== action.id);
        default:
            return state;
    }
};

const ContextProvider = ({ children }: { children: any }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    const [wishlist, WishListdispatch] = useReducer(wishListreducer, []);
    const [notificationItems, Notificationdispatch] = useReducer(notificationReducer,[]);
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
             <WishListContext.Provider value={{ wishlist, WishListdispatch }}>
                <NotificationContext.Provider
                    value={{ notificationItems, Notificationdispatch }}
                >
                    {children}
                </NotificationContext.Provider>
            </WishListContext.Provider>
        </CartContext.Provider>
    );
};

export default ContextProvider;
