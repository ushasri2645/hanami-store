import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";

const Navbar = ({
    cartCount,
    updateResults,
}: {
    cartCount: number;
    updateResults: Function;
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (event: any) => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        updateResults(searchTerm);
    }, [searchTerm]);
    return (
        <div>
            <nav className={styles.navbar}>
                <img className={styles.logo} src="./assests/logo.jpg" />
                <h1 className={styles.storeName}>Hanami</h1>
                <div className={styles.searchCart}>
                    <div className={styles.searchContainer}>
                        <input
                            id="query"
                            className={styles.searchBar}
                            placeholder="Search item"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <SlMagnifier className={styles.searchIcon} />
                    </div>
                    <div className={styles.cart}>
                        <span className={styles.badge}>{cartCount}</span>
                        <CiShoppingCart size={34} className={styles.cartIcon} />
                    </div>
                    <button className={styles.btn}>Login</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
