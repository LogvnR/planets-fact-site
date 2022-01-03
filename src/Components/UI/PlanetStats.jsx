import styles from "../Styles/PlanetStats.module.css";

const PlanetStats = (props) => {
  return (
    <>
      <div className={styles.statistic}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.amount}>{props.amount}</p>
      </div>
    </>
  );
};

export default PlanetStats;
