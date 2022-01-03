import styles from "../Styles/PlanetInfoSelect.module.css";

const PlanetInfoSelect = (props) => {
  return (
    <div className={styles.container}>
      <div
        onClick={props.overviewTabHandler}
        className={
          props.overviewTab ? `${styles.option} ${styles.theme}` : styles.option
        }
      >
        <p className={styles.title}>Overview</p>
      </div>
      <div
        onClick={props.structureTabHandler}
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
