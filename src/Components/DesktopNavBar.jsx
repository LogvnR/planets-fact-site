import { useState } from "react";

import styles from "./Styles/DesktopNavBar.module.css";
import DesktopNavBarPlanets from "./UI/DesktopNavBarPlanets";

import planets from "../Helpers/data.json";

const DesktopNavBar = () => {
  const [mercury, setMercury] = useState(true);
  const [venus, setVenus] = useState(false);
  const [earth, setEarth] = useState(false);
  const [mars, setMars] = useState(false);
  const [jupiter, setJupiter] = useState(false);
  const [saturn, setSaturn] = useState(false);
  const [uranus, setUranus] = useState(false);
  const [neptune, setNeptune] = useState(false);

  const mercuryHandler = () => {
    setMercury(true);
    setVenus(false);
    setEarth(false);
    setMars(false);
    setJupiter(false);
    setSaturn(false);
    setUranus(false);
    setNeptune(false);
  };

  const venusHandler = () => {
    setMercury(false);
    setVenus(true);
    setEarth(false);
    setMars(false);
    setJupiter(false);
    setSaturn(false);
    setUranus(false);
    setNeptune(false);
  };

  const earthHandler = () => {
    setMercury(false);
    setVenus(false);
    setEarth(true);
    setMars(false);
    setJupiter(false);
    setSaturn(false);
    setUranus(false);
    setNeptune(false);
  };

  const marsHandler = () => {
    setMercury(false);
    setVenus(false);
    setEarth(false);
    setMars(true);
    setJupiter(false);
    setSaturn(false);
    setUranus(false);
    setNeptune(false);
  };

  const jupiterHandler = () => {
    setMercury(false);
    setVenus(false);
    setEarth(false);
    setMars(false);
    setJupiter(true);
    setSaturn(false);
    setUranus(false);
    setNeptune(false);
  };

  const saturnHandler = () => {
    setMercury(false);
    setVenus(false);
    setEarth(false);
    setMars(false);
    setJupiter(false);
    setSaturn(true);
    setUranus(false);
    setNeptune(false);
  };

  const uranusHandler = () => {
    setMercury(false);
    setVenus(false);
    setEarth(false);
    setMars(false);
    setJupiter(false);
    setSaturn(false);
    setUranus(true);
    setNeptune(false);
  };

  const neptuneHandler = () => {
    setMercury(false);
    setVenus(false);
    setEarth(false);
    setMars(false);
    setJupiter(false);
    setSaturn(false);
    setUranus(false);
    setNeptune(true);
  };

  return (
    <div className={styles["desktop-nav"]}>
      <DesktopNavBarPlanets
        onClick={mercuryHandler}
        planetState={mercury}
        planet={planets[0].name}
      />
      <DesktopNavBarPlanets
        onClick={venusHandler}
        planetState={venus}
        planet={planets[1].name}
      />
      <DesktopNavBarPlanets
        onClick={earthHandler}
        planetState={earth}
        planet={planets[2].name}
      />
      <DesktopNavBarPlanets
        onClick={marsHandler}
        planetState={mars}
        planet={planets[3].name}
      />
      <DesktopNavBarPlanets
        onClick={jupiterHandler}
        planetState={jupiter}
        planet={planets[4].name}
      />
      <DesktopNavBarPlanets
        onClick={saturnHandler}
        planetState={saturn}
        planet={planets[5].name}
      />
      <DesktopNavBarPlanets
        onClick={uranusHandler}
        planetState={uranus}
        planet={planets[6].name}
      />
      <DesktopNavBarPlanets
        onClick={neptuneHandler}
        planetState={neptune}
        planet={planets[7].name}
      />
    </div>
  );
};

export default DesktopNavBar;
