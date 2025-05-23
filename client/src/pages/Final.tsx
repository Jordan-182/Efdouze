import dogeKing from "../../public/dogeKing.webp";
import styles from "../styles/Final.module.css";

export const Final = () => {
  return (
    <>
      <img src={dogeKing} alt="WELL DONE KING" className={styles.doge} />
      <div className={styles.pyro}>
        <div className={styles.before}></div>
        <div className={styles.after}></div>
      </div>
    </>
  );
};
