import { Link } from "react-router-dom";

import styles from "../Styles/NavBarPlanet.module.css";

const NavBarPlanet = (props) => {
  return (
    <Link onClick={props.close} to={`${props.name}`}>
      <div className={`${styles["main-container"]} ${props.className}`}>
        <div className={styles["title-container"]}>
          <div
            style={{ backgroundColor: `var(--${props.name})` }}
            className={styles.icon}
          ></div>

          <p className={styles.name}>{props.name}</p>
        </div>
        <svg
          className={styles.cheveron}
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="8"
        >
          <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
        </svg>
      </div>
    </Link>
  );
};

export default NavBarPlanet;
