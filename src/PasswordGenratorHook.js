import { useState } from "react"

const PasswordGenratorHook = () => {
    const [password , setPassword] = useState("");
    const [error , setError] = useState(false);

    const generatePassword = (checkboxes , passwordLength) => {
        let charSet = "";
        let text = "";
        const selectedOptions = checkboxes.filter(checkbox => checkbox.state);

        if(selectedOptions.length <= 0){
            setError(true);
            return;
        }

        selectedOptions.forEach(option => {
            switch(option.title){
                case "Include Uppercase Letters":
                    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;

                case "Include Lowercase Letters":
                    charSet += "abcdefghijklmnopqrstuvwxyz";
                    break;

                case "Include Numbers":
                    charSet += "0123456789";
                    break;

                case "Include Symbols":
                 charSet += "!@#$%^&*()";
                 break;

                 default:
                    break;
            }
        })

        for(let i = 0; i < passwordLength; i++){
            const randomNumber = Math.floor(Math.random() * charSet.length);
            text += charSet[randomNumber];
        }
        setPassword(text);
        setError(false);
    }



    return {password , error , generatePassword};
  
}

export default PasswordGenratorHook