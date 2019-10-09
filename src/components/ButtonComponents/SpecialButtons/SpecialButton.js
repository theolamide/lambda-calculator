import React from "react";

const SpecialButton = props => {
  return (
    <div className = "individualSpecialsContainer">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = "specials_button">
        {props.currentSpecialCha}
      </button>
    </div>
  );
};


export default SpecialButton;