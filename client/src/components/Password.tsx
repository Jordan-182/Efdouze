import styles from "../styles/Password.module.css";

type PasswordProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  src: string;
};

function password({ value, onChange, onKeyDown, src }: PasswordProps) {
  return (
    <>
      <div className={styles.container}>
        <img src={src} alt="clue" className={styles.clue} />
        <div className={styles.passwordContainer}>
          <h2>PASSWORD</h2>
          <input
            type="password"
            placeholder="Enter password"
            className={styles.password}
            maxLength={10}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>
    </>
  );
}

export default password;
