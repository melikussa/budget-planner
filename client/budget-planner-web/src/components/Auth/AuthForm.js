import { useState, useRef, useContext } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    console.log("We're here");
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // add validation here
    console.log(enteredEmail, enteredPassword);


    setIsLoading(true);
    fetchSecuredMessage(enteredEmail, enteredPassword) //sending request
  };

  const fetchSecuredMessage = async (enteredEmail, enteredPassword) => {
    const username = enteredEmail; // demo_user
    const password = enteredPassword; // demo_pass

    const token = btoa(`${username}:${password}`);  // Encode credentials in base64

    const response = await fetch('http://localhost:8080/hello/lika', {
      method: 'GET',
      headers: {
          'Authorization': `Basic ${token}`,
          'Content-Type': 'application/json'
      },
      credentials: 'include',  // Ensure credentials are sent
  });
    const data = await response.json();
    console.log(data);
    setIsLoading(false);
    setMessage(data.message);
};

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            ref={emailInputRef}
        //    type="email"
            id="email"
            autoComplete="new-password"
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            id="password"
            autoComplete="new-password"
            required
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new accpunt" : "Login with existing account"}
          </button>
        </div>
        <h1>{message}</h1>
      </form>
    </section>
  );
};

export default AuthForm;
