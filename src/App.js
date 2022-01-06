import { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Planet from "./Components/Planet";
import Background from "./Components/UI/Background";

import data from "./Helpers/data.json";

const App = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const updateScreenSize = () => {
      if (size[0] < 768 || size[1] < 500) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    updateScreenSize();
  }, [size]);

  return (
    <Background>
      <BrowserRouter>
        <NavBar isMobile={isMobile} />

        <Routes>
          <Route
            path=""
            element={<Planet isMobile={isMobile} planet={data[0]} />}
          />
          <Route
            path="/Mercury"
            element={<Planet isMobile={isMobile} planet={data[0]} />}
          />
          <Route
            path="/Venus"
            element={<Planet isMobile={isMobile} planet={data[1]} />}
          />
          <Route
            path="/Earth"
            element={<Planet isMobile={isMobile} planet={data[2]} />}
          />
          <Route
            path="/Mars"
            element={<Planet isMobile={isMobile} planet={data[3]} />}
          />
          <Route
            path="/Jupiter"
            element={<Planet isMobile={isMobile} planet={data[4]} />}
          />
          <Route
            path="/Saturn"
            element={<Planet isMobile={isMobile} planet={data[5]} />}
          />
          <Route
            path="/Uranus"
            element={<Planet isMobile={isMobile} planet={data[6]} />}
          />
          <Route
            path="/Neptune"
            element={<Planet isMobile={isMobile} planet={data[7]} />}
          />
        </Routes>
      </BrowserRouter>
    </Background>
  );
};

export default App;
