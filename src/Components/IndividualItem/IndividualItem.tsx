import React from 'react'
import salesStyles from './SaleItem.module.css'
import normalStyles from './NormalItem.module.css'
import { TItem } from '../../Types/ItemType'

const IndividualItem = ({item}:{ item:TItem}) => {
    const styles = item.offer ? salesStyles : normalStyles
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
                            <button className={styles.wishlist}>Wish List</button>
                        </div>
                    ) : (
                        <div className={styles.statusbtn}>
                            <button className={item.isAvailable ? styles.wishlist : styles.notifyme}>{item.isAvailable ? "Wish List" : "Notify Me"}</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default IndividualItem
