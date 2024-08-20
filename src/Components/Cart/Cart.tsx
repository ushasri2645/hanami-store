import React, { useContext } from "react";
import { CartContext, dataContext } from "../../Context/Context";
import { TItem } from "../../Types/ItemType";
import styles from "./Cart.module.css";
import { data } from "../../Data/Data";
import { ToastContainer,toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
    const cartContext = useContext(CartContext);
    const DC = useContext(dataContext);

    if (!cartContext || !DC) {
        return <p>Loading...</p>;
    }

    const { cart, dispatch } = cartContext;
    const { queryResults } = DC;

    const findProductById = (id: number): TItem | undefined => {
        return data.find((product) => product.id === id);
    };

    const calculateItemTotal = (product: TItem, quantity: number) =>
        product.price * quantity;

    const calculateCartTotal = () => {
        return cart.reduce((total, cartItem) => {
            const product = findProductById(cartItem.id);
            if (product) {
                return total + calculateItemTotal(product, cartItem.quantity);
            }
            return total;
        }, 0);
    };
    const handleRemove = (id: number)=> {
        console.log(cart);
        const itemc= cart.find(item=>item.id===item.id)
        console.log("cart id",itemc?.id)
        console.log("item id", id)
        // console.log(itemc?.id===id)
            if (window.confirm("Do you want to remove this product from the cart?")) {
                dispatch({ type: 'REMOVE_FROM_CART', id});
                console.log("dispatched")
                console.log("Updated cart:", cart);
                toast.success("Removed From Cart")
            }
            else{
                toast.warn("Remo From Cart")
            }
    };
    const handleDecrement = (id: number, quantity: number) => {
        console.log(quantity)
        if (quantity === 1) {
            console.log(quantity)
            if (window.confirm("Do you want to remove this product from the cart?")) {
                dispatch({ type: 'REMOVE_FROM_CART', id });
            }
        } else {
            console.log("came tp dece")
            dispatch({ type: 'DECREMENT', id });
        }
    };

    return (
        <>
        <Navbar updateResults={() => {}} /> 
        <div className={styles.cartContainer}>
            <ToastContainer/>
            
            <h1>Cart</h1>
            {cart.length === 0 && <p>Your cart feels very light! </p>}
            {cart.map((cartItem) => {
                const product = findProductById(cartItem.id);
                if (!product) return null;

                return (
                    <div key={cartItem.id} className={styles.cartItem}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.itemImage}
                        />
                        <div className={styles.itemDetails}>
                            <h2>{product.name}</h2>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <p>Size: {cartItem.size}</p>
                            <p>
                                Total: $
                                {calculateItemTotal(
                                    product,
                                    cartItem.quantity
                                ).toFixed(2)}
                            </p>
                            <div className={styles.quantityControls}>
                                <button onClick={() =>handleDecrement(cartItem.id,cartItem.quantity)} >-</button><p>{cartItem.quantity}</p>
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "INCREMENT",
                                            id: cartItem.id,
                                        })
                                    }
                                >
                                    +
                                </button>
                            </div>
                            <button onClick = {()=> handleRemove(cartItem.id)}>Remove From cart</button>
                        </div>
                    </div>
                );
            })}
            
            {cart.length>1?(
                <>
                <div className={styles.cartTotal}>
                <h2>Total Bill: ${calculateCartTotal().toFixed(2)}</h2>
            </div>
                <button onClick={()=>{toast.success(`Ordered Succesfully and Total Price is: ${calculateCartTotal().toFixed(2)} Thanks for shopping!! Please visit again`);dispatch({type:"EMPTY"})}}>Order Now</button>
                </>
            ):(
                <></>
            )}
            
        </div>
        </>
    );
};

export default Cart;
