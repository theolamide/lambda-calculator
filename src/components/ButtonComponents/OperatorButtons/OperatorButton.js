import React from "react";

const OperatorButton = props => {

  console.log(props)
  return (
    <div className = "individualOperatorContainer">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = "operator_button"> 
        {props.currentOpr.char}
      </button>
    </div>
  );
};

export default OperatorButton;
