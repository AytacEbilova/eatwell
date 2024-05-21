import React, { useContext } from "react";
import styles from "../Header/header.module.scss"

import { Link } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
const Header = () => {
    const{basket}=useContext(BasketContext)
  return (
    <div>
      <header>
        <div className={styles.container}>
        <div className={styles.all} >
            <div className={styles.logo}>
                EatWell
            </div>
            <div className={styles.right}>
                <ul>
                    <li>
                        <Link to={"/"} className={styles.link}>Home</Link>
                    </li>
                    <li>
                        <Link to={"add"}className={styles.link}>Add</Link>
                    </li>
                    <li>
                        <Link to={"about"}className={styles.link}>About</Link>
                    </li>
                    <li>
                        <Link to={"offer"}className={styles.link}>Offer</Link>
                    </li>
                    <li>
                        <Link to={"menu"}className={styles.link}>Menu</Link>
                    </li>
                   
                    <li>
                        <Link to={"basket"}className={styles.link}>Basket</Link>
                    </li>
                    <li>
                        <Link to={"gallery"}className={styles.link}>Gallery</Link>
                    </li>
                    <li>
                        <Link to={"contact"}className={styles.link}>Contact</Link>
                    </li>
                    <li>
                        <Link to={"basket"} className={styles.link}>Basket <sup>{basket.length}</sup></Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
       
       
      </header>
    </div>
  );
};

export default Header;
