import styles from "./index.module.scss";
import logo_transparent from "../../assets/img/logo_transparent.png";
import logo_m from "../../assets/img/logo_m.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo_transparent} className={styles.logo}></img>
      <h4 className={styles.me}>Mattia Nini</h4>
      <img src={logo_m} className={styles.logo_m}></img>
      <button className={styles.mattiaaa}>Mattia</button>
    </div>
  );
};

export default Navbar;
