import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "../components/Modal";
import Password from "../components/Password";
import { useCount } from "../context/CountContext";
import styles from "../styles/Homepage.module.css";

export const Navigation = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const navigate = useNavigate();
  const [slideAnimation, setSlideAnimation] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { count, setCount } = useCount();
  const pageId = 5;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (inputValue === "Haddock") {
        const completed = JSON.parse(
          localStorage.getItem("completedPages") || "[]"
        );
        if (!completed.includes(pageId)) {
          setSlideAnimation(false);
          setIsPasswordCorrect(true);
        } else {
          alert("Mot de passe déjà trouvé pour cette page!");
        }
      } else {
        setShowModal(true);
      }
    }
  };

  useEffect(() => {
    if (isPasswordCorrect) {
      const completed = JSON.parse(
        localStorage.getItem("completedPages") || "[]"
      );
      if (!completed.includes(pageId)) {
        setCount((prev) => prev + 1);
        localStorage.setItem("count", (count + 1).toString());
        const updated = [...completed, pageId];
        localStorage.setItem("completedPages", JSON.stringify(updated));
      }
      setTimeout(() => {
        setSlideAnimation(true);
        navigate("/Log");
      }, 400);
    }
  }, [isPasswordCorrect]);

  return (
    <>
      <div className={styles.container}>
        <Modal isOpen={showModal} link="/Log" />
        <Password
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          src="src/assets/images/navigation.jpg"
          slideAnimation={slideAnimation}
        />
      </div>
    </>
  );
};
