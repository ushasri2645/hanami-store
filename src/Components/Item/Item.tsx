import { useContext, useEffect, useState } from "react";
import salesStyles from "./SaleItem.module.css";
import normalStyles from "./Item.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TItem } from "../../Types/ItemType";
import { CartContext } from "../../Context/Context";
import { WishListContext } from "../../Context/Context";
import { NotificationContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const IndividualItem = ({ item }: { item: TItem }) => {
    const navigate = useNavigate();
    const styles = item.offer ? salesStyles : normalStyles;

    const cartContext = useContext(CartContext);
    const wishListContext = useContext(WishListContext);
    const notificationContext = useContext(NotificationContext);

    if (!cartContext || !wishListContext || !notificationContext) {
        return <div>Loading...</div>;
    }

    const { cart, dispatch } = cartContext;
    const { wishlist, WishListdispatch } = wishListContext;
    const { notificationItems, Notificationdispatch } = notificationContext;

    const toggleHeart = () => {
        if (!wishlist.includes(item.id)) {
            WishListdispatch({ type: "ADD_TO_WISHLIST", item: item });
        } else {
            WishListdispatch({ type: "REMOVE_FROM_WISHLIST", id: item.id });
        }
    };

    const addToWishList = () => {
        toggleHeart();
    };

    const handleCart = () => {
        dispatch({ type: "ADD_TO_CART", item: item });
        toast.success("Added to Cart");
    };

    const updateNotificationStatus = () => {
        toast.success("Received request");
        Notificationdispatch({ type: "NOTIFY", id: item.id });
    };

    return (
        <div className={!item.isAvailable ? styles.overlay : ""}>
            <div className={styles.item}>
                {item.isNew && <span className={styles.badge}>New</span>}
                <img
                    onClick={() => {
                        navigate(`/product/${item.id}`);
                    }}
                    className={styles.itemimage}
                    src={item.image}
                />
                <div className={styles.bottomsection}>
                    <p className={styles.name}>{item.name}</p>
                    <div className={styles.pricerating}>
                        <p>${item.price}</p>
                        <p>|</p>
                        <p>{item.rating} ⭐</p>
                    </div>
                    {item.offer ? (
                        <div className={styles.offavailable}>
                            <p> Get a {item.offer}% offer</p>
                            <div
                                className={normalStyles.hearticon}
                                onClick={() => {
                                    addToWishList();
                                }}
                            >
                                {wishlist.includes(item.id) ? (
                                    <AiFillHeart color="red" size={25} />
                                ) : (
                                    <AiOutlineHeart color="black" size={25} />
                                )}
                            </div>
                            <button className={styles.wishlist}>{cart.findIndex((i) => i.id === item.id) !==-1 ? <p onClick={() => {navigate("/cart");}}> Go to Cart</p> : 
                                    <p onClick={handleCart}>Add to Cart</p>
                                }
                            </button>
                        </div>
                    ) : (
                        <div className={styles.statusbtn}>
                            <div
                                className={normalStyles.hearticon}
                                onClick={() => {
                                    addToWishList();
                                }}
                            >
                                {wishlist.includes(item.id) ? (
                                    <AiFillHeart color="red" size={25} />
                                ) : (
                                    <AiOutlineHeart color="black" size={25} />
                                )}
                            </div>
                            <button
                                disabled={notificationItems.includes(item.id)}
                                className={
                                    item.isAvailable
                                        ? styles.wishlist
                                        : styles.notifyme
                                }
                            >
                                {item.isAvailable ? (
                                    <p>
                                        {cart.findIndex(
                                            (i) => i.id === item.id
                                        ) !== -1 ? (
                                            <p
                                                onClick={() => {
                                                    navigate("/cart");
                                                }}
                                            >
                                                Go to Cart
                                            </p>
                                        ) : (
                                            <p onClick={handleCart}>
                                                Add to Cart
                                            </p>
                                        )}
                                    </p>
                                ) : (
                                    <p
                                        onClick={() => {
                                            updateNotificationStatus();
                                        }}
                                    >
                                        Notify Me
                                    </p>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IndividualItem;
