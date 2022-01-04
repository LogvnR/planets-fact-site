import styles from "../Styles/DesktopPlanetPhoto.module.css";

const DesktopPlanetPhoto = (props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      <div className={styles["img-container"]}>
        <img
          style={{ width: `var(--${props.name}-size)` }}
          className={styles.img}
          src={props.photo}
          alt={props.name}
        />
        {props.surfaceIcon && (
          <img
            className={styles["surface-icon"]}
            src={props.surfaceIcon}
            alt={props.name}
          />
        )}
      </div>
    </div>
  );
};

export default DesktopPlanetPhoto;
