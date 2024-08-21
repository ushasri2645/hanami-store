import React, {
    Component,
    Dispatch,
    createContext,
    useReducer,
    useState,
} from "react";
import { TItem } from "../Types/ItemType";

type cartContextType = {
    cart: {
        id: number;
        size: string;
        quantity: number;
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

export const NotificationContext = createContext<notificationType | undefined>(
    undefined
);

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
            const existingItem = state.findIndex(
                (item: any) => item.id === action.item.id
            );
            if (existingItem !== -1) {
                return state.map((item: any, index: number) =>
                    index === existingItem
                        ? {
                              ...item,
                              quantity: item.quantity + action.item.quantity,
                          }
                        : item
                );
            }
            console.log(state);
            return [
                ...state,
                {
                    id: action.item.id,
                    quantity: action.item.quantity || 1,
                    size: action.size || "M",
                },
            ];
        case "REMOVE_FROM_CART":
            console.log("removing");
            return state.filter((item: any) => item.id !== action.id);
        case "INCREMENT":
            return state.map((item: any) =>
                item.id === action.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        case "DECREMENT":
            return state.map((item: any) =>
                item.id === action.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        case "SIZE":
            return state.map((item: any) =>
                item.id === action.id
                    ? { ...item, size: action.size }
                    : item
            );
        case "EMPTY":
            return [];
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
export const dataContext = createContext<any | undefined>(undefined);
const ContextProvider = ({ children }: { children: any }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    const [wishlist, WishListdispatch] = useReducer(wishListreducer, []);
    const [notificationItems, Notificationdispatch] = useReducer(
        notificationReducer,
        []
    );
    const [queryResults, setQueryResults] = useState<TItem[]>([]);
    const updateResults = (searchQuery: string) => {
        setQueryResults(
            queryResults.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    };

    return (
        <dataContext.Provider value={{ queryResults, setQueryResults }}>
            <CartContext.Provider value={{ cart, dispatch }}>
                <WishListContext.Provider
                    value={{ wishlist, WishListdispatch }}
                >
                    <NotificationContext.Provider
                        value={{ notificationItems, Notificationdispatch }}
                    >
                        {children}
                    </NotificationContext.Provider>
                </WishListContext.Provider>
            </CartContext.Provider>
        </dataContext.Provider>
    );
};

export default ContextProvider;
