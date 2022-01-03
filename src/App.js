import styles from "./App.module.css";
import NavBar from "./Components/NavBar";
import Planet from "./Components/Planet";
import Background from "./Components/UI/Background";

import data from "./Helpers/data.json";

const mercury = data[0];

const App = () => {
  return (
    <Background>
      <NavBar />
      <Planet planet={mercury} />
    </Background>
  );
};

export default App;
