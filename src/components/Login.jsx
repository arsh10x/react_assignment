import "./css/Login.css";
import { useDispatch } from "react-redux";
import { authLogin } from "../Reducer/UserSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "./Config";
import { useState } from "react";

const Login = () => {
  // Email and pass login
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUp, setSignUp] = useState(false);
  const [signUpData, setSignUpData] = useState({ email: "", password: "" });

  const handleSignUpChange = (e) => {
    setSignUpData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const emailSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpData.email,
        signUpData.password
      );
      console.log(userCredential);
      alert("Signup Successful");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleLoginChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const emailLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      console.log(userCredential);
      dispatch(authLogin(userCredential.user));
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // Google Login
  const dispatch = useDispatch();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        dispatch(authLogin(res.user));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="login">
      {signUp ? (
        <form>
          <h3 className="login__title">SignUp Here</h3>

          <label htmlFor="username" className="login__label">
            Username
          </label>
          <input
            type="text"
            placeholder="Email or Phone"
            id="username"
            name="email"
            className="login__input"
            value={signUpData.email}
            onChange={handleSignUpChange}
          />

          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="login__input"
            value={signUpData.password}
            onChange={handleSignUpChange}
          />
          <div>
            <div style={{ marginTop: 20, color:'white' }}>
              Already have an account?{" "}
              <span
                style={{ color: "yellow", cursor: "pointer", fontWeight:'bold' }}
                onClick={() => setSignUp(false)}
              >
                Login
              </span>
            </div>
          </div>
          <button onClick={emailSignup} className="login__button">
            Sign Up
          </button>
        </form>
      ) : (
        <form>
          <h3 className="login__title">Login Here</h3>

          <label htmlFor="username" className="login__label">
            Username
          </label>
          <input
            type="text"
            placeholder="Email or Phone"
            id="username"
            name="email"
            className="login__input"
            value={loginData.email}
            onChange={handleLoginChange}
          />

          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="login__input"
            value={loginData.password}
            onChange={handleLoginChange}
          />
          <div>
            <div style={{ marginTop: 20, color: "white" }}>
              Create an Account{" "}
              <span
                style={{ color: "yellow", cursor: "pointer", fontWeight:'bold' }}
                onClick={() => setSignUp(true)}
              >
                SignUp
              </span>
            </div>
          </div>
          <button onClick={emailLogin} className="login__button">
            Login
          </button>

          <div className="striped">
            <span className="striped-line"></span>
            <span className="striped-text">Or</span>
            <span className="striped-line"></span>
          </div>
          <div className="social">
            <div className="go" onClick={handleGoogleLogin}>
              Google
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
