import styles from "./Styles/DesktopNavBar.module.css";
import DesktopNavBarPlanets from "./UI/DesktopNavBarPlanets";

import planets from "../Helpers/data.json";

const DesktopNavBar = (props) => {
  return (
    <div className={styles["desktop-nav"]}>
      {planets.map((planet) => (
        <DesktopNavBarPlanets
          key={planet.name}
          setSelectedPlanet={props.setSelectedPlanet}
          selectedPlanet={props.selectedPlanet}
          planet={planet.name}
        />
      ))}
    </div>
  );
};

export default DesktopNavBar;
