import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";

import styles from "./Styles/NavBar.module.css";
import NavModal from "./UI/NavModal";
import { Link } from "react-router-dom";
import DesktopNavBarPlanets from "./UI/DesktopNavBarPlanets";
import DesktopNavBar from "./DesktopNavBar";

const NavBar = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickBtn = () => {
    if (modalOpen === false) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <Link to="/">
        <p className={styles["logo-title"]}>The Planets</p>
      </Link>

      {!props.isMobile && <DesktopNavBar />}
      {props.isMobile && (
        <Hamburger
          className={styles.hamburger}
          color="#fff"
          size={29}
          toggled={modalOpen}
          onToggle={handleClickBtn}
        />
      )}
      {modalOpen && <NavModal close={closeModal} />}
    </header>
  );
};

export default NavBar;
