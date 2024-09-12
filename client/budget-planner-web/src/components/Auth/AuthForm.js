import { useState, useRef, useContext } from "react";

import classes from "./AuthForm.module.css";


const AuthForm = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        // add validation here

        setIsLoading(true);
        console.log(isLoading + " isss Loading");

        // send request here
    }




  return (
    <section className={classes.auth}> 
        <form>
            <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input ref={emailInputRef} type="email" id="email" required />
            </div>
            <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input ref={passwordInputRef} type="password" id="password" required />
            </div>
            <button type="button" className={classes.toggle} onClick={switchAuthModeHandler} />
        </form>
    </section>
  );
};

export default AuthForm;