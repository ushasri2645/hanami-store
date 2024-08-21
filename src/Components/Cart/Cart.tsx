import React, { useContext, useEffect, useState } from "react";
import { CartContext, dataContext } from "../../Context/Context";
import { TItem } from "../../Types/ItemType";
import styles from "./Cart.module.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { confirmAlert as showConfirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Cart = () => {
    const [data, setData] = useState<TItem[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5050/api/items");
                if (!response.ok) {
                    throw new Error("Network Issue");
                }
                const result: TItem[] = await response.json();
                setData(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <p>Loading...</p>;
    }

    const { cart, dispatch } = cartContext;

    const findProductById = (id: number): TItem | undefined => {
        return data.find((product) => product.id === id);
    };

    const calculateItemTotal = (product: TItem, quantity: number) =>
        product.price * quantity;

    const calculateItemTotalDiscount = (product: TItem, quantity: number) => {
        if (product.offer)
            return (
                product.price * quantity - product.price * (product.offer / 100)
            );
        else return product.price * quantity;
    };
    const calculateCartTotal = () => {
        return cart.reduce((total, cartItem) => {
            const product = findProductById(cartItem.id);
            if (product) {
                return total + calculateItemTotal(product, cartItem.quantity);
            }
            return total;
        }, 0);
    };
    const calculateCartTotalDiscount = () => {
        return cart.reduce((total, cartItem) => {
            const product = findProductById(cartItem.id);
            if (product && product.offer) {
                let val = calculateItemTotalDiscount(
                    product,
                    cartItem.quantity
                );
                return total + val;
            }
            return total;
        }, 0);
    };
    const handleRemove = (id: number) => {
        showConfirmAlert({
            message: "Are you sure you want to Remove this item from cart?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        dispatch({ type: "REMOVE_FROM_CART", id });
                        toast.success("Removed From Cart");
                    },
                },
                {
                    label: "No",
                    onClick: () => {
                        console.log("Deletion canceled");
                        toast.success("Deleting from cart cancelled");
                    },
                },
            ],
        });
    };
    const handleDecrement = (id: number, quantity: number) => {
        console.log(quantity);
        if (quantity === 1) {
            console.log(quantity);
            if (
                window.confirm(
                    "Do you want to remove this product from the cart?"
                )
            ) {
                dispatch({ type: "REMOVE_FROM_CART", id });
            }
        } else {
            console.log("came tp dece");
            dispatch({ type: "DECREMENT", id });
        }
    };

    return (
        <>
            <Navbar updateResults={() => {}} />

            <ToastContainer />
            <div className={styles.cart}>
                <div className={styles.goBack}>
                    <p onClick={() => navigate("/")}>🔙 Go Back</p>
                </div>
                {cart.length === 0 ? (
                    <p className={styles.noCart}>
                        {" "}
                        Your cart feels very light!{" "}
                    </p>
                ) : (
                    <>
                        <h1 className={styles.title}>
                            Cart({cart.length} items)
                        </h1>
                        <div className={styles.cartContainer}>
                            <div className={styles.topSection}>
                                {cart.map((cartItem) => {
                                    const product = findProductById(
                                        cartItem.id
                                    );
                                    if (!product) return null;

                                    return (
                                        <div
                                            key={cartItem.id}
                                            className={styles.cartItem}
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className={styles.itemImage}
                                            />
                                            <div className={styles.itemDetails}>
                                                <h2>{product.name}</h2>
                                                <p>
                                                    Price: $
                                                    {product.price.toFixed(2)}{" "}
                                                    {product.offer ? (
                                                        <p>
                                                            Discount: $
                                                            {calculateItemTotalDiscount(
                                                                product,
                                                                cartItem.quantity
                                                            ).toFixed(2)}
                                                        </p>
                                                    ) : (
                                                        ""
                                                    )}
                                                </p>

                                                <div
                                                    className={
                                                        styles.quantityControls
                                                    }
                                                >
                                                    <button
                                                        className={
                                                            styles.sizeBtn
                                                        }
                                                    >
                                                        {cartItem.size}
                                                    </button>
                                                    <button
                                                        className={
                                                            styles.incdecBtn
                                                        }
                                                        onClick={() => {
                                                            if (
                                                                cartItem.quantity ==
                                                                1
                                                            ) {
                                                                handleRemove(
                                                                    cartItem.id
                                                                );
                                                            } else {
                                                                handleDecrement(
                                                                    cartItem.id,
                                                                    cartItem.quantity
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        -
                                                    </button>
                                                    <p>{cartItem.quantity}</p>
                                                    <button
                                                        className={
                                                            styles.incdecBtn
                                                        }
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
                                                <p>
                                                    Total: $
                                                    {calculateItemTotal(
                                                        product,
                                                        cartItem.quantity
                                                    ).toFixed(2)}
                                                </p>
                                                <button
                                                    className={styles.remove}
                                                    onClick={() =>
                                                        handleRemove(
                                                            cartItem.id
                                                        )
                                                    }
                                                >
                                                    Remove From cart
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div>
                                {cart.length > 0 ? (
                                    <div className={styles.priceOrderSection}>
                                        <div className={styles.cartTotal}>
                                            <h2 className={styles.paymentTitle}>
                                                Payment Details
                                            </h2>
                                            <hr></hr>
                                            <div
                                                className={styles.priceDetails}
                                            >
                                                <div
                                                    className={styles.subPrice}
                                                >
                                                    <p>
                                                        Price(
                                                        {`${cart.length} items`}
                                                        )
                                                    </p>
                                                    <p>
                                                        {calculateCartTotal().toFixed(
                                                            2
                                                        )}
                                                    </p>
                                                </div>

                                                <div
                                                    className={styles.subPrice}
                                                >
                                                    <p>Discount</p>
                                                    <p className={styles.green}>
                                                        {calculateCartTotalDiscount().toFixed(
                                                            2
                                                        )}
                                                    </p>
                                                </div>

                                                <div
                                                    className={styles.subPrice}
                                                >
                                                    <p>Delivery Charges</p>
                                                    <p className={styles.green}>
                                                        FREE
                                                    </p>
                                                </div>
                                                <hr></hr>
                                                <div
                                                    className={styles.subPrice}
                                                >
                                                    <p>Total Amount</p>
                                                    <p>
                                                        {(
                                                            calculateCartTotal() -
                                                            calculateCartTotalDiscount()
                                                        ).toFixed(2)}
                                                    </p>
                                                </div>
                                                <hr></hr>
                                                <p className={styles.green}>
                                                    You Saved $
                                                    {calculateCartTotalDiscount().toFixed(
                                                        2
                                                    )}{" "}
                                                    on this order
                                                </p>
                                            </div>
                                            {/* <h2>Total Bill: ${calculateCartTotal().toFixed(2)}</h2> */}
                                        </div>
                                        <div className={styles.orderSection}>
                                            <button className={styles.priceBtn}>
                                                <p>
                                                    $
                                                    {(
                                                        calculateCartTotal() -
                                                        calculateCartTotalDiscount()
                                                    ).toFixed(2)}
                                                </p>
                                                <p className={styles.fontSmall}>
                                                    View Price Details
                                                </p>
                                            </button>
                                            <button
                                                className={styles.order}
                                                onClick={() => {
                                                    toast.success(
                                                        `Ordered Succesfully and Total Price is: ${calculateCartTotal().toFixed(
                                                            2
                                                        )} Thanks for shopping!! Please visit again`
                                                    );
                                                    dispatch({ type: "EMPTY" });
                                                }}
                                            >
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
function confirmAlert(arg0: {
    title: string;
    message: string;
    buttons: { label: string; onClick: () => void }[];
}) {
    throw new Error("Function not implemented.");
}
