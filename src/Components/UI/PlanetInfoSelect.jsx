import styles from "../Styles/PlanetInfoSelect.module.css";

const PlanetInfoSelect = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.option} ${styles.theme}`}>
        <p className={styles.title}>Overview</p>
      </div>
      <div className={styles.option}>
        <p className={styles.title}>Structure</p>
      </div>
      <div className={styles.option}>
        <p className={styles.title}>Surface</p>
      </div>
    </div>
  );
};

export default PlanetInfoSelect;
