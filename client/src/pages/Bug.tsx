import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Password from "../components/Password";
import { useCount } from "../context/CountContext";
import styles from "../styles/Homepage.module.css";

export const Bug = () => {
    const [inputValue, setInputValue] = useState("");
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const navigate = useNavigate();
    const { count, setCount } = useCount();
    const [slideAnimation, setSlideAnimation] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (inputValue === "LAVACHICKEN") {
                setSlideAnimation(false);
                setIsPasswordCorrect(true);
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
                navigate("/KeyboardIsBroken");
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
                    src="/motdepase.png"
                    slideAnimation={slideAnimation}
                />
            </div>
        </>
    );
};
