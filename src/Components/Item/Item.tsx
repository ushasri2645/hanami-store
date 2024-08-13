import React, { useEffect, useState } from 'react'
import salesStyles from './SaleItem.module.css'
import normalStyles from './Item.module.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { TItem } from '../../Types/ItemType';

const IndividualItem = ({item,key, cartUpdate}:{ item:TItem,key:number,cartUpdate:Function}) => {
    const styles = item.offer ? salesStyles : normalStyles
    const [isClickedHeart, setIsClickedHeart]  = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isNotified, setIsNotified] = useState(false);

    const toggleHeart = () => {
        if(!isClickedHeart){
            toast.success("Added to Wish List");
        }
        else{
            toast.error("Removed from Wish List");
        }
        setIsClickedHeart(!isClickedHeart);
    }

    const updateNotificationStatus = () => {
        setIsNotified(true);
        toast.success("Received request");
    }

    return (
        
        <div className={!item.isAvailable ? styles.overlay : ''}>
           
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
                            <button onClick={()=>{setIsAddedToCart(!isAddedToCart);cartUpdate(item.id);toast.success("Added to Cart")}} className={styles.wishlist}>{isAddedToCart?"Added":"Add to Cart"}</button>
                        </div>
                    ) : (
                        <div className={styles.statusbtn}>
                            <div className={normalStyles.hearticon} onClick={toggleHeart}>
                                {isClickedHeart?<AiFillHeart color='red' size={25}/>:<AiOutlineHeart color='black' size={25}/>}
                            </div>
                            <button disabled={isNotified} className={item.isAvailable ? styles.wishlist : styles.notifyme}>
                                {item.isAvailable ? 
                                    (<p onClick={()=>{setIsAddedToCart(!isAddedToCart);cartUpdate(item.id);toast.success("Added to Cart")}}>{"Add to Cart"}</p>) 
                                    : 
                                    (
                                    <p onClick={()=>{updateNotificationStatus()}}>Notify Me</p>
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
