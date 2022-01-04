import styles from "../Styles/DesktopNavBarPlanets.module.css";
import { Link } from "react-router-dom";

const DesktopNavBarPlanets = (props) => {
  return (
    <Link className={styles.link} to={`${props.planet}`}>
      <div
        onClick={props.onClick}
        style={
          props.planetState
            ? { borderTopColor: `var(--${props.planet}-theme)` }
            : { borderBottomColor: "transparent" }
        }
        className={styles.container}
      >
        <p className={styles.planet}>{props.planet}</p>
      </div>
    </Link>
  );
};

export default DesktopNavBarPlanets;
