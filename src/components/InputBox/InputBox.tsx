import React, { ChangeEvent } from 'react';
import { Action } from '../../typesd';
import './styles.css'

interface InputBoxProps{
  name:string;
  width:string;
  inputId:string;
  vfield?:string;
  dispatch?:React.Dispatch<Action>|null;

}

const InputBox = ({name,width,inputId,vfield,dispatch}:InputBoxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (dispatch && vfield) {
      dispatch({
        type: 'UPDATE_FORM_FIELD',
        field:vfield,
        value: newValue,
      });
    }
  };
  return (
   
      <div className="inputBox" style={{width:width}}>
        <input id={inputId} type="text" required={true} onChange={handleChange}  />
        <span>{name} </span>
      </div>
   
  );
};

export default InputBox;
