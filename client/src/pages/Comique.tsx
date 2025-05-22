import Password from "../components/Password";
import styles from "../styles/Comique.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Comique = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const navigate = useNavigate();
  const [slideAnimation, setSlideAnimation] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (inputValue === "comicsansms") {
        setSlideAnimation(false);
        setIsPasswordCorrect(true);
      } else {
        alert("Incorrect password");
      }
    }
  };

  useEffect(() => {
    if (isPasswordCorrect) {
      setTimeout(() => {
        setSlideAnimation(true);
        navigate("/Clicker");
      }, 400);
    }
  }, [isPasswordCorrect]);

  return (
    <>
      <div className={styles.background}>
        <img src="src/assets/images/comique.png" />
      </div>
      <div className={styles.container}>
        <Password
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          src="src/assets/images/comique2.jpg"
          slideAnimation={slideAnimation}
        />
      </div>
    </>
  );
};
