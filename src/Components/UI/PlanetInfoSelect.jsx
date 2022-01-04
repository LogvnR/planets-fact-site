import styles from "../Styles/PlanetInfoSelect.module.css";

const PlanetInfoSelect = (props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      <div
        onClick={props.overviewTabHandler}
        style={
          props.isMobile
            ? props.overviewTab
              ? { borderBottomColor: `var(--${props.name}-theme)` }
              : { borderBottomColor: "transparent" }
            : props.overviewTab
            ? { backgroundColor: `var(--${props.name}-theme)` }
            : { backgroundColor: "transparent" }
        }
        className={
          props.overviewTab ? `${styles.option} ${styles.theme}` : styles.option
        }
      >
        {!props.isMobile && <p className={styles["title-number"]}>01</p>}
        <p className={styles.title}>Overview</p>
      </div>
      <div
        onClick={props.structureTabHandler}
        style={
          props.isMobile
            ? props.structureTab
              ? { borderBottomColor: `var(--${props.name}-theme)` }
              : { borderBottomColor: "transparent" }
            : props.structureTab
            ? { backgroundColor: `var(--${props.name}-theme)` }
            : { backgroundColor: "transparent" }
        }
        className={
          props.structureTab
            ? `${styles.option} ${styles.theme}`
            : styles.option
        }
      >
        {!props.isMobile && <p className={styles["title-number"]}>02</p>}
        <p className={styles.title}>
          {props.isMobile ? "Structure" : "Internal Structure"}
        </p>
      </div>
      <div
        onClick={props.surfaceTabHandler}
        style={
          props.isMobile
            ? props.surfaceTab
              ? { borderBottomColor: `var(--${props.name}-theme)` }
              : { borderBottomColor: "transparent" }
            : props.surfaceTab
            ? { backgroundColor: `var(--${props.name}-theme)` }
            : { backgroundColor: "transparent" }
        }
        className={
          props.surfaceTab ? `${styles.option} ${styles.theme}` : styles.option
        }
      >
        {!props.isMobile && <p className={styles["title-number"]}>03</p>}
        <p className={styles.title}>
          {props.isMobile ? "Surface" : "Surface Geology"}
        </p>
      </div>
    </div>
  );
};

export default PlanetInfoSelect;
