import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Password from "../components/Password";
import { useCount } from "../context/CountContext";
import styles from "../styles/Over.module.css";
import { randomPassword } from "../utils/randomPassword";

export const Over = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const { count, setCount } = useCount();
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
        setSlideAnimation(false);
        setIsPasswordCorrect(true);
      } else if (inputValue === "password") {
        setShowVideo(true);
        setTimeout(() => {
          videoRef.current?.play();
        }, 0);
      } else {
        alert("Incorrect password");
      }
    }
  };

  useEffect(() => {
    if (isPasswordCorrect) {
      setCount((prev) => prev + 1);
      localStorage.setItem("count", (count + 1).toString());
      setTimeout(() => {
        setSlideAnimation(true);
        navigate("/ThePasswordIsRickRollIPromessItsNotARickRoll");
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
          src="src/assets/images/hover.jpg"
          slideAnimation={slideAnimation}
        />
      </div>
      <div
        className={styles.hover}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        password (again)
      </div>
      <div className={styles.video}>
        <video
          ref={videoRef}
          src="src/assets/video/rickroll.mp4"
          width="560"
          height="315"
          preload="auto"
          style={{ display: showVideo ? "block" : "none" }}
        />
      </div>
      <div
        className={`${styles.password}${isHovered ? " " + styles.hovered : ""}`}
      >
        {password}
      </div>
    </>
  );
};
