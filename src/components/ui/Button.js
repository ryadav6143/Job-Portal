// Can be removed, only purpose is to show redirect working

import React from "react";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  let history = useNavigate();

  function handleClick() {
    history.push("/");
  }

  return (
    <div>
      <button className="testButton" type="button" onClick={handleClick}>
        Test Redirect
      </button>
      <small>Button trys to take user to '/'</small>
    </div>
  );
}

export default HomeButton;
