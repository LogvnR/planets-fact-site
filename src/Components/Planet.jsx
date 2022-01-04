import { useState } from "react";

import styles from "./Styles/Planet.module.css";
import PlanetInfo from "./UI/PlanetInfo";
import PlanetInfoSelect from "./UI/PlanetInfoSelect";
import PlanetStats from "./UI/PlanetStats";
import DesktopPlanetInfo from "./UI/DesktopPlanetInfo";
import DesktopPlanetPhoto from "./UI/DesktopPlanetPhoto";

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
    <>
      {props.isMobile && (
        <main className={styles.planet}>
          <PlanetInfoSelect
            name={props.planet.name}
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
              surfaceIcon={false}
            />
          )}
          {structureTab && (
            <PlanetInfo
              photo={props.planet.images.internal}
              name={props.planet.name}
              description={props.planet.structure.content}
              source={props.planet.structure.source}
              surfaceIcon={false}
            />
          )}
          {surfaceTab && (
            <PlanetInfo
              photo={props.planet.images.planet}
              name={props.planet.name}
              description={props.planet.geology.content}
              source={props.planet.geology.source}
              surfaceIcon={props.planet.images.geology}
            />
          )}
          <div className={styles["statistics-container"]}>
            <PlanetStats title="Rotation Time" amount={props.planet.rotation} />
            <PlanetStats
              title="Revolution Time"
              amount={props.planet.revolution}
            />
            <PlanetStats title="Radius" amount={props.planet.radius} />
            <PlanetStats
              title="Average Temp."
              amount={props.planet.temperature}
            />
          </div>
        </main>
      )}
      {!props.isMobile && (
        <main className={styles.planet}>
          <div className={styles["planet-container"]}>
            {overviewTab && (
              <>
                <DesktopPlanetPhoto
                  className={styles["desktop-photo"]}
                  photo={props.planet.images.planet}
                  name={props.planet.name}
                  surfaceIcon={false}
                />
                <DesktopPlanetInfo
                  className={styles["desktop-info"]}
                  name={props.planet.name}
                  description={props.planet.overview.content}
                  source={props.planet.overview.source}
                />
              </>
            )}
            {structureTab && (
              <>
                <DesktopPlanetPhoto
                  className={styles["desktop-photo"]}
                  photo={props.planet.images.internal}
                  name={props.planet.name}
                  surfaceIcon={false}
                />
                <DesktopPlanetInfo
                  className={styles["desktop-info"]}
                  name={props.planet.name}
                  description={props.planet.structure.content}
                  source={props.planet.structure.source}
                />
              </>
            )}
            {surfaceTab && (
              <>
                <DesktopPlanetPhoto
                  className={styles["desktop-photo"]}
                  photo={props.planet.images.planet}
                  name={props.planet.name}
                  surfaceIcon={props.planet.images.geology}
                />
                <DesktopPlanetInfo
                  className={styles["desktop-info"]}
                  name={props.planet.name}
                  description={props.planet.geology.content}
                  source={props.planet.geology.source}
                />
              </>
            )}
            <PlanetInfoSelect
              isMobile={props.isMobile}
              className={styles["desktop-select"]}
              name={props.planet.name}
              overviewTab={overviewTab}
              overviewTabHandler={overviewTabHandler}
              structureTab={structureTab}
              structureTabHandler={structureTabHandler}
              surfaceTab={surfaceTab}
              surfaceTabHandler={surfaceTabHandler}
            />
          </div>
          <div className={styles["statistics-container"]}>
            <PlanetStats title="Rotation Time" amount={props.planet.rotation} />
            <PlanetStats
              title="Revolution Time"
              amount={props.planet.revolution}
            />
            <PlanetStats title="Radius" amount={props.planet.radius} />
            <PlanetStats
              title="Average Temp."
              amount={props.planet.temperature}
            />
          </div>
        </main>
      )}
    </>
  );
};

export default Planet;
