import styles from "./Styles/Planet.module.css";
import PlanetInfo from "./UI/PlanetInfo";
import PlanetInfoSelect from "./UI/PlanetInfoSelect";

const Planet = () => {
  return (
    <main className={styles.planet}>
      <PlanetInfoSelect />
      <PlanetInfo />
    </main>
  );
};

export default Planet;
