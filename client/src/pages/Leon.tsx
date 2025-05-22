import Password from "../components/Password";
import styles from "../styles/Leon.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { randomPassword } from "../utils/randomPassword";

export const Leon = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [slideAnimation, setSlideAnimation] = useState(true);

  useEffect(() => {
    setIsPasswordCorrect(false);
    setPassword(randomPassword());
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (inputValue === password) {
        setSlideAnimation(false)
        setIsPasswordCorrect(true)
      } else {
        alert("Incorrect password");
      }
    }
  };

  useEffect(() => {
    if (isPasswordCorrect) {
      setTimeout(() => {
        setSlideAnimation(true)
        navigate("/ReplaceThis");
      }, 400);
    }
  }, [isPasswordCorrect]);

  return (
    <>
      <div className={styles.container}>
        <Password
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          src="src/assets/images/Leon.jpg"
          slideAnimation={slideAnimation}
        />
      </div>
      <div className={styles.Leon}>{password}</div>
    </>
  );
};
