import React, { useState } from "react";
import "./Authentication.css";
import Login from "./Login";
import Signup from "./Signup";

const Authentication = () => {
  const [active, setActive] = useState("");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login")
  }

  return (
    <div className="authentication">
      <div className="auth-left">
        <img src="assets/instagram-auth-hero.jpg" alt="" />
      </div>
      <div className="auth-right">
        {active === "login" ? <Login /> : <Signup />}

        <div className="auth-more">
          <span>
            {active === "login" ? (
              <>
                Don't have an Account ? <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Already have an Account ? <button onClick={handleChange}>Login</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
