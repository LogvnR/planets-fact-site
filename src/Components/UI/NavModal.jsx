import ReactDOM from "react-dom";

import styles from "../Styles/NavModal.module.css";
import NavBarPlanet from "./NavBarPlanet";

import planets from "../../Helpers/data.json";

const NavModal = (props) => {
  //   use props.close()

  return ReactDOM.createPortal(
    <>
      <div className={styles.modalContainer} onClick={() => props.close()}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {planets.map((planet) => (
            <NavBarPlanet
              className={styles["navbar-item"]}
              name={planet.name}
            />
          ))}
        </div>
      </div>
    </>,

    document.getElementById("modal")
  );
};

export default NavModal;
