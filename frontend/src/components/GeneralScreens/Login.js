import { useState } from "react";
import axios from "axios";
import "../../Css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'

const Login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Replace with your login logic
      await axios.post('/api/login', { email, password });
      navigate('/dashboard'); // Redirect to a logged-in page
    } catch (error) {
      setShowMessage(true);
    }
  };

  const handleClose = () => {
    setShowMessage(false);
  };

  return (
    <Styles>
    <div className="Inclusive-login-page">
      <div className="login-big-wrapper">
        <div className="section-wrapper">
          <div className="top-suggest_register">
            <span>Don't have an account? </span>
            <Link to="/all-guns">Sign Up</Link>
          </div>

          <div className="top-login-explain">
            <h2>Login to Your Account</h2>
            <p>Please login to your account, thank you!</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="email"
                required
                id="email"
                name="email"
                placeholder="example@gmail.com"
                tabIndex={1}
                aria-describedby="emailHelp"
              />
              <label htmlFor="email">E-mail</label>
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                required
                id="password"
                name="password"
                autoComplete="current-password"
                placeholder="6+ strong characters"
                tabIndex={2}
                aria-describedby="passwordHelp"
              />
              <label htmlFor="password">Password</label>
            </div>
            <Link to="/forgotpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </Link>
            <button type="submit">Login</button>
          </form>

          {showMessage && (
            <div className="modal-overlay">
              <div className="message-box">
                <p>You have to be a registered gun owner to claim an account on the Best Online Guns Site.</p>
                <button className="close-button" onClick={handleClose}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </Styles>
  );
};

export default Login;

const Styles =  styled.div`
/* Styles for the modal background */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it's on top of other content */
  }
  
  /* Styles for the modal box */
  .message-box {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 80%;
    text-align: center;
  }
  
  /* Close button */
  .message-box .close-button {
    background: #ff4d4d;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
  }
  
`;