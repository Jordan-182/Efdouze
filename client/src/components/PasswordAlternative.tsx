import styles from "../styles/Password.module.css";

type PasswordProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  src: string;
  slideAnimation: boolean;
  Disable?: boolean;
};

function passwordAlternative({
  value,
  onChange,
  onKeyDown,
  src,
  slideAnimation,
  Disable,
}: PasswordProps) {
  return (
    <>
      <div className={slideAnimation ? styles.container : styles.containerOut}>
        <img src={src} alt="clue" className={styles.clue} />
        <div className={styles.passwordContainer}>
          <h2>PASSWORD</h2>
          <input
            disabled={Disable}
            type="password"
            placeholder="Enter password"
            className={styles.password}
            maxLength={14}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>
    </>
  );
}

export default passwordAlternative;
