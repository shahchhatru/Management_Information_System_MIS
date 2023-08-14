import React, { ChangeEvent } from 'react';

import './styles.css'

interface InputBoxProps{
  name:string;
  width:string;
  inputId:string;
  setState?: React.Dispatch<React.SetStateAction<string | null>>;

}

const SInputBox = ({name,width,inputId,setState}:InputBoxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if(setState){
        setState(newValue);
    }
    console.log(newValue);
    
  };
  return (
   
      <div className="inputBox" style={{width:width}}>
        <input id={inputId} type="text" required={true} onChange={handleChange}  />
        <span>{name} </span>
      </div>
   
  );
};

export default SInputBox;
