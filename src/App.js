import styles from "./App.module.css";
import NavBar from "./Components/NavBar";
import Planet from "./Components/Planet";
import Background from "./Components/UI/Background";

const App = () => {
  return (
    <Background>
      <NavBar />
      <Planet />
    </Background>
  );
};

export default App;
