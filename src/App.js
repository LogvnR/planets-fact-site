import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Planet from "./Components/Planet";
import Background from "./Components/UI/Background";

import data from "./Helpers/data.json";

const App = () => {
  return (
    <Background>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="" element={<Planet planet={data[0]} />} />
          <Route path="/Mercury" element={<Planet planet={data[0]} />} />
          <Route path="/Venus" element={<Planet planet={data[1]} />} />
          <Route path="/Earth" element={<Planet planet={data[2]} />} />
          <Route path="/Mars" element={<Planet planet={data[3]} />} />
          <Route path="/Jupiter" element={<Planet planet={data[4]} />} />
          <Route path="/Saturn" element={<Planet planet={data[5]} />} />
          <Route path="/Uranus" element={<Planet planet={data[6]} />} />
          <Route path="/Neptune" element={<Planet planet={data[7]} />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
};

export default App;
