import styles from "../Styles/PlanetInfoSelect.module.css";

const PlanetInfoSelect = (props) => {
  return (
    <div className={styles.container}>
      <div
        onClick={props.overviewTabHandler}
        style={
          props.overviewTab
            ? { borderBottomColor: `var(--${props.name}-theme)` }
            : { borderBottomColor: "transparent" }
        }
        className={
          props.overviewTab ? `${styles.option} ${styles.theme}` : styles.option
        }
      >
        <p className={styles.title}>Overview</p>
      </div>
      <div
        onClick={props.structureTabHandler}
        style={
          props.structureTab
            ? { borderBottomColor: `var(--${props.name}-theme)` }
            : { borderBottomColor: "transparent" }
        }
        className={
          props.structureTab
            ? `${styles.option} ${styles.theme}`
            : styles.option
        }
      >
        <p className={styles.title}>Structure</p>
      </div>
      <div
        onClick={props.surfaceTabHandler}
        style={
          props.surfaceTab
            ? { borderBottomColor: `var(--${props.name}-theme)` }
            : { borderBottomColor: "transparent" }
        }
        className={
          props.surfaceTab ? `${styles.option} ${styles.theme}` : styles.option
        }
      >
        <p className={styles.title}>Surface</p>
      </div>
    </div>
  );
};

export default PlanetInfoSelect;
