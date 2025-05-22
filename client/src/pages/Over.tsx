import Password from "../components/Password";
import styles from "../styles/Over.module.css";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { useCount } from "../context/CountContext";
import { randomPassword } from "../utils/randomPassword";

export const Over = () => {
  const [inputValue, setInputValue] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const { setCount } = useCount();
  const [password, setPassword] = useState("");

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
      navigate("/ThePasswordIsRickRollIPromessItsNotARickRoll");
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
