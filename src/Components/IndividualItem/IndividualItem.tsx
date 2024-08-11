import React, { useEffect, useState } from 'react'
import salesStyles from './SaleItem.module.css'
import normalStyles from './NormalItem.module.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TItem } from '../../Types/ItemType';

const IndividualItem = ({item, cartUpdate}:{ item:TItem,cartUpdate:Function}) => {
    const styles = item.offer ? salesStyles : normalStyles
    const [isClickedHeart, setIsClickedHeart]  = useState(false);
    const [isClickedCart, setIsClickedCart] = useState(false);
    const [isClickNotify, setIsClickNotify] = useState(false);

    const toggleHeart = () => {;
        setIsClickedHeart(!isClickedHeart);
    }

    const toggleCart = () => {
        setIsClickedCart(!isClickedCart);
    }

    const toggleNotify = () => {
        setIsClickNotify(!isClickNotify)
        toast.success("Received request")
    }

    useEffect(()=>{
        if(isClickedCart){
            cartUpdate(1);
        }
        else{
            cartUpdate(-1);
        }
    },[isClickedCart])

    return (
        
        <div className={!item.isAvailable ? styles.overlay : ''}>
            <ToastContainer position="bottom-right" autoClose={3000} theme="light" pauseOnHover />
            <div className={styles.item}>
                {item.isNew && <span className={styles.badge}>New</span>}
                <img className={styles.itemimage} src={item.image} />
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
                            <div className={normalStyles.hearticon} onClick={toggleHeart}>
                                {isClickedHeart?<AiFillHeart color='red' size={25}/>:<AiOutlineHeart color='black' size={25}/>}
                            </div>
                            <button onClick={toggleCart} className={styles.wishlist}>{!isClickedCart?"Add to Cart":"Remove From Cart"}</button>
                        </div>
                    ) : (
                        <div className={styles.statusbtn}>
                            <div className={normalStyles.hearticon} onClick={toggleHeart}>
                                {isClickedHeart?<AiFillHeart color='red' size={25}/>:<AiOutlineHeart color='black' size={25}/>}
                            </div>
                            <button disabled={isClickNotify} className={item.isAvailable ? styles.wishlist : styles.notifyme}>
                                {item.isAvailable ? 
                                    (<p onClick={toggleCart}>{!isClickedCart?"Add to Cart":"Remove From Cart"}</p>) 
                                    : 
                                    (
                                    // <p onClick={()=>{toggleNotify(); toast.success("Recieved")}}>Notify Me</p>
                                    <p onClick={toggleNotify}>Notify Me</p>
                                    )
                                    
                                }
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default IndividualItem
