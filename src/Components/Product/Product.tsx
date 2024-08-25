import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Context";
import { useContext, useEffect, useState } from "react";
import { WishListContext } from "../../Context/Context";
// import { data } from "../../Data/Data";
import styles from "./Product.module.css";
import { toast } from "react-toastify";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { NotificationContext } from "../../Context/Context";
import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import { TItem } from "../../Types/ItemType";

const Product = () => {
    const [item, setItem] = useState<TItem>();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5050/api/items/${id}`);
                if (!response.ok) {
                    throw new Error("Network Issue");
                }
                const result: TItem = await response.json();
                setItem(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchProduct();
    }, []);

    useEffect(() => {
        if (item && item.sizes["M"] === 0) {
            const allSizes = ["S", "M", "L", "XL", "XXL"];
            let sizeFound = false;

            for (let size of allSizes) {
                if (item.sizes[size] > 0) {
                    setSelectedSize(size);
                    sizeFound = true;
                    break;
                }
            }

            if (!sizeFound) {
                setSelectedSize('');
            }
        }
    }, [item]);
    
    const [selectedSize, setSelectedSize] = useState<string>("M");
    const navigate = useNavigate();
    const { id } = useParams();

    const cartContext = useContext(CartContext);
    const wlContext = useContext(WishListContext);
    const notificationContext = useContext(NotificationContext);
    if (!id || !cartContext || !wlContext || !notificationContext) {
        return <>Context Not Found</>;
    }
    if (!item) {
        return <>Item Not Found</>;
    }

    const { cart, dispatch } = cartContext;
    const { wishlist, WishListdispatch } = wlContext;
    const { notificationItems, Notificationdispatch } = notificationContext;

    const isInCart = cart.some((i) => i.id === item.id);

    return (
        <>
           <ToastContainer />
            <Navbar updateResults={() => {}} />
            <div className={styles.product}>
            <div className={styles.goBack}>
                <p onClick={() => navigate("/")}>🔙 Go Back</p>
            </div>
            <div className={styles.productContainer}>
                <div className={styles.topSection}>
                    <div>
                        <img className={styles.image} src={item?.image} />
                    </div>
                    <div className={styles.details}>
                        <h1>{item.name}</h1>
                        <h4>Rating: {item.rating}⭐</h4>
                        <h4>Price: ${item.price}</h4>
                        <div className={styles.sizes}>
                            {item.sizes &&
                                Object.keys(item.sizes).map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => {
                                            setSelectedSize(size);
                                            console.log(size);
                                            dispatch({
                                                type: "SIZE",
                                                size: size,
                                                id: item.id,
                                            });
                                        }}
                                        disabled={item.sizes[size] === 0}
                                        className={`${styles.sizeButton} ${ selectedSize===size?styles.selected:''}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                        </div>
                        <div className={styles.buttonWishList}>
                            {item.isAvailable ? (
                                <button
                                    onClick={() => {
                                        if (isInCart) {
                                            navigate("/cart");
                                        } else {
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                item: item,
                                                size: selectedSize,
                                            });
                                            toast.success("Added to Cart");
                                            // setSelectedSize(selectedSize)
                                        }
                                    }}
                                    className={styles.wishlist}
                                >
                                    {isInCart ? "Go To Cart" : "Add to Cart"}
                                </button>
                            ) : (
                                <button
                                    disabled={notificationItems.includes(
                                        item.id
                                    )}
                                    onClick={() => {
                                        toast.success('We\'ll Notify');
                                        Notificationdispatch({
                                            type: "NOTIFY",
                                            id: item.id,
                                        });
                                        console.log("HI")
                                        
                                    }}
                                >
                                    Notify Me
                                </button>
                            )}

                            <div className={styles.statusbtn}>
                                <div
                                    className={styles.hearticon}
                                    onClick={() => {
                                        if (wishlist.includes(item?.id)) {
                                            WishListdispatch({
                                                type: "REMOVE_FROM_WISHLIST",
                                                id: item.id,
                                            });
                                        } else {
                                            WishListdispatch({
                                                type: "ADD_TO_WISHLIST",
                                                item: item,
                                            });
                                        }
                                    }}
                                >
                                    {wishlist.includes(item?.id) ? (
                                        <AiFillHeart color="red" size={25} />
                                    ) : (
                                        <AiOutlineHeart
                                            color="black"
                                            size={25}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    <h3>Description</h3>
                    <p>{item.description}</p>
                </div>
            </div>
            </div>
        </>
    );
};

export default Product;
