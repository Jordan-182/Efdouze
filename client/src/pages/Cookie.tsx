import Password from "../components/Password";
import styles from "../styles/Homepage.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Cookie = () => {
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
            if (inputValue === "GoodJob") {
                setSlideAnimation(false)
                setIsPasswordCorrect(true)
            } else {
                alert("Incorrect password");
            }
        }
    };

    useEffect(() => {
        document.cookie = "password=GoodJob; path=/";
        if (isPasswordCorrect) {
            setTimeout(() => {
                setSlideAnimation(true)
                navigate("/");
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
                    src="src/assets/images/password.png"
                    slideAnimation={slideAnimation}
                />
            </div>
        </>
    );
};
