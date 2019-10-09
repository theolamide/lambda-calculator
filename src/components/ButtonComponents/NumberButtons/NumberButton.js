import React from "react";
import { tsPropertySignature } from "@babel/types";

 const NumberButton = props => {
   console.log(props);
  return (
    <div className = "individualNumberContainer">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = "number_button"> 
        {props.currentNum}
      </button>
    </div>
    
  );
};

export default NumberButton;