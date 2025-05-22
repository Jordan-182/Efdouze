import Password from "../components/Password";
import styles from "../styles/Comique.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Musique = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const navigate = useNavigate();
  const [slideAnimation, setSlideAnimation] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const hiddenPassword = atob("T3pvbmU=");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (inputValue === hiddenPassword) {
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
        <audio>
          <source src="src/assets/musique/musique.mp3" type="audio/mpeg" />
          Votre navigateur ne supporte pas l'élément audio.
        </audio>
      </div>
      <div className={styles.container}>
        <Password
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          src="src/assets/images/controls.png"
          slideAnimation={slideAnimation}
        />
      </div>
    </>
  );
};
