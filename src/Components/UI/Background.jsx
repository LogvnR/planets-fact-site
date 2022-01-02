import styles from "../Styles/Background.module.css";

const Background = (props) => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles.stars}>{props.children}</div>
    </div>
  );
};

export default Background;
