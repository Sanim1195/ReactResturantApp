import "./Input.css";
import { useState } from "react";

function Input(props) {
    const [enteredText, setEnteredText] = useState("");
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
    const [errorMessage, setErrorMessage] = useState("")

    function inputChangeHandler(event) {
        setEnteredText(event.target.value);
        console.log("Typing")
        setIsPlaceholderVisible(event.target.value === "");
    }

    function handleFocus() {
        setIsPlaceholderVisible(false);

    }

    function handleBlur() {
        setIsPlaceholderVisible(true);
        console.log("Blur");
        setErrorMessage("")
    }

    function submitData(event) {
        event.preventDefault();
        if (enteredText.trim().length < 2) {

            setErrorMessage(" 🤚 This field is required ")
        } else {
            props.dataHandler(enteredText);
            setEnteredText("");
            setErrorMessage("")

        }
    }

    return (
        <div>
            <div className="mainContainer">
                <div className="inputContainer">
                    <input
                        type="text"
                        value={enteredText}
                        onChange={inputChangeHandler}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onKeyDown={(event) => {
                            event.code === "Enter" &&
                                submitData(event)
                        }}
                        placeholder={isPlaceholderVisible ? "Enter text" : ""}

                    />
                    {/* displaying error message */}
                    {errorMessage}
                </div>

                <div className="buttonContainer">
                    <button type="submit"
                        onClick={submitData}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Input;
