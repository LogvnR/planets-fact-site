import styles from "../Styles/Background.module.css";

const Background = (props) => {
  const checkChange = () => {
    console.log("changed");
  };
  return (
    <div onChange={checkChange} className={styles["main-container"]}>
      <div className={styles.stars}>{props.children}</div>
    </div>
  );
};

export default Background;
