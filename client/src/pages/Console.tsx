import Password from "../components/Password";
import styles from "../styles/Leon.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Console = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const navigate = useNavigate();
  const [slideAnimation, setSlideAnimation] = useState(true);

  useEffect(() => {
    setIsPasswordCorrect(false);
  }, []);

  const password = "PCFTW";
  console.log(password);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (inputValue === "PCFTW") {
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
        navigate("/Comique");
      }, 200);
    }
  }, [isPasswordCorrect]);

  return (
    <>
      <div className={styles.container}>
        <Password
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          src="src/assets/images/consoles.jpg"
          slideAnimation={slideAnimation}
        />
      </div>
    </>
  );
};
