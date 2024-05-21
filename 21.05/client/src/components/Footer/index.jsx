import React from "react";
import styles from "../Footer/footer.module.scss";
const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.sectLast}>
        <div className={styles.div1}>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Cumque,
            similique, delectus <br /> blanditiis odit expedita amet. Sed labore ipsum <br />
            vel dolore, quis, culpa et magni autem sequi <br /> facere eos tenetur, ex?
          </p>
        </div>
        <div className={styles.div2}>
        <h4>THE RESTAURANT</h4>
        <ul>
            <li>About Us</li>
            <li>Chefs</li>
            <li>Event</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className={styles.div2}>
        <h4>Useful Links</h4>
        <ul>
            <li>Foods</li>
            <li>Drinks</li>
            <li>BreakFast</li>
            <li>Brunch</li>
            <li>Dinner</li>
        </ul>
        </div>
        <div className={styles.div2}>
        <h4>Useful Links</h4>
        <ul>
            <li>Foods</li>
            <li>Drinks</li>
            <li>BreakFast</li>
            <li>Brunch</li>
            <li>Dinner</li>
        </ul>
        </div>
        </div>
     
      </div>
    </footer>
  );
};

export default Footer;
