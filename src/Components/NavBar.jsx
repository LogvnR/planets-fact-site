import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";

import styles from "./Styles/NavBar.module.css";
import NavModal from "./UI/NavModal";

const NavBar = () => {
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
      <p className={styles["logo-title"]}>The Planets</p>
      <Hamburger
        className={styles.hamburger}
        color="#fff"
        size={29}
        toggled={modalOpen}
        onToggle={handleClickBtn}
      />
      {modalOpen && <NavModal />}
    </header>
  );
};

export default NavBar;
