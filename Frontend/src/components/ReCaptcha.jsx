import React from "react";
import "../styles/re-captcha.css";

const ReCaptcha = () => {
  return (
    <div className="captcha">
      <div className="spinner">
        <label>
          <input type="checkbox" />
          <span className="checkmark">
            <span>&nbsp;</span>
          </span>
        </label>
      </div>
      <div className="text">I'm not a robot</div>
      <div className="captcha_logo">
        <img
          alt="captcha_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/2048px-RecaptchaLogo.svg.png"
        />
        <p>Privacy - Terms</p>
      </div>
    </div>
  );
};

export default ReCaptcha;
