import styles from "../Styles/DesktopNavBarPlanets.module.css";
import { Link } from "react-router-dom";

const DesktopNavBarPlanets = (props) => {
  const handleSelectedPlanet = () => {
    props.setSelectedPlanet(props.planet);
  };

  return (
    <Link className={styles.link} to={`${props.planet}`}>
      <div
        onClick={handleSelectedPlanet}
        style={
          props.selectedPlanet === props.planet
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
