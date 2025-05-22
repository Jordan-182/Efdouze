import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "../components/Modal";
import Password from "../components/Password";
import { useCount } from "../context/CountContext";
import styles from "../styles/Leon.module.css";
import { randomPassword } from "../utils/randomPassword";

export const Leon = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [slideAnimation, setSlideAnimation] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { count, setCount } = useCount();
  const pageId = 4;

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
        const completed = JSON.parse(
          localStorage.getItem("completedPages") || "[]"
        );
        if (!completed.includes(pageId)) {
          setSlideAnimation(false);
          setIsPasswordCorrect(true);
        } else {
          setShowModal(true);
        }
      } else {
        alert("Incorrect password");
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
        navigate("/ReplaceThis");
      }, 400);
    }
  }, [isPasswordCorrect]);

  return (
    <>
      <div className={styles.container}>
        <Modal isOpen={showModal} link="/ReplaceThis" />
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
