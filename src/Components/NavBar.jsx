import { useState, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";

import styles from "./Styles/NavBar.module.css";
import NavModal from "./UI/NavModal";
import { Link } from "react-router-dom";
import DesktopNavBar from "./DesktopNavBar";

const NavBar = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    modalOpen && (document.body.style.position = "fixed");
    !modalOpen && (document.body.style.position = "relative");
  }, [modalOpen]);

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
    <nav className={styles.navbar}>
      <Link className={styles["main-title"]} onClick={closeModal} to="/">
        <h1 className={styles["logo-title"]}>The Planets</h1>
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
    </nav>
  );
};

export default NavBar;
