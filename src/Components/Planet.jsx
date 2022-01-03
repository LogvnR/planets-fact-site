import { useState } from "react";

import styles from "./Styles/Planet.module.css";
import PlanetInfo from "./UI/PlanetInfo";
import PlanetInfoSelect from "./UI/PlanetInfoSelect";
import PlanetStats from "./UI/PlanetStats";

const Planet = (props) => {
  const [overviewTab, setOverviewTab] = useState(true);
  const [structureTab, setStructureTab] = useState(false);
  const [surfaceTab, setSurfaceTab] = useState(false);

  const overviewTabHandler = () => {
    setOverviewTab(true);
    setStructureTab(false);
    setSurfaceTab(false);
  };

  const structureTabHandler = () => {
    setOverviewTab(false);
    setStructureTab(true);
    setSurfaceTab(false);
  };

  const surfaceTabHandler = () => {
    setOverviewTab(false);
    setStructureTab(false);
    setSurfaceTab(true);
  };

  return (
    <main className={styles.planet}>
      <PlanetInfoSelect
        overviewTab={overviewTab}
        overviewTabHandler={overviewTabHandler}
        structureTab={structureTab}
        structureTabHandler={structureTabHandler}
        surfaceTab={surfaceTab}
        surfaceTabHandler={surfaceTabHandler}
      />
      {overviewTab && (
        <PlanetInfo
          photo={props.planet.images.planet}
          name={props.planet.name}
          description={props.planet.overview.content}
          source={props.planet.overview.source}
        />
      )}
      {structureTab && (
        <PlanetInfo
          photo={props.planet.images.internal}
          name={props.planet.name}
          description={props.planet.structure.content}
          source={props.planet.structure.source}
        />
      )}
      {surfaceTab && (
        <PlanetInfo
          photo={props.planet.images.planet}
          name={props.planet.name}
          description={props.planet.geology.content}
          source={props.planet.geology.source}
        />
      )}
      <div className={styles["statistics-container"]}>
        <PlanetStats title="Rotation Time" amount={props.planet.rotation} />
        <PlanetStats title="Revolution Time" amount={props.planet.revolution} />
        <PlanetStats title="Radius" amount={props.planet.radius} />
        <PlanetStats title="Average Temp." amount={props.planet.temperature} />
      </div>
    </main>
  );
};

export default Planet;
