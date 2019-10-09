import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";
import { tsPropertySignature } from "@babel/types";

//import any components needed

//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state

  const [specialCha, setSpecialCha] = useState(specials);

  return (
    <div className = "SpecialsContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialCha.map((currentSpecialCha, index) => {
         return <SpecialButton displaySpecialCha = {props.displaySpecialCha} key = {index} currentSpecialCha = {currentSpecialCha} />
       })

       }
    </div>
  );
};

export default Specials;
