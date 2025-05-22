import Password from "../components/Password";
import styles from "../styles/Homepage.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Icon = () => {
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
            if (inputValue === "samus") {
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
                navigate("/Musique");
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
                    src="https://www.maisonvictor.fr/30-large_default/onglet-de-boeuf.jpg"
                    slideAnimation={slideAnimation}
                />
            </div>
        </>
    );
};