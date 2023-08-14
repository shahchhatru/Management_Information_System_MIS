import React,{  ChangeEvent } from 'react';
import { Action } from '../../typesd.ts';

import './styles.css';



interface SelectorBoxProps {
  title: string;
  vfield?:string;
  dispatch?:React.Dispatch<Action>|null;

}

const DaySelectorBox = ({ title,vfield,dispatch }: SelectorBoxProps) => {

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOptionValue = event.target.value;
   // setSelectedValue(selectedOptionValue);

    if (dispatch && vfield) {
      console.log("dispatch runned",vfield,selectedOptionValue);
      dispatch({
        type: 'UPDATE_FORM_FIELD',
        field: vfield, // Adjust the field name according to your form structure
        value: selectedOptionValue,
      });
    }
  };
  

  return (
    <div className="selectbox-container">
      <div className="select">
        <select name="format" id="format" style={{ width: "400px" }} onChange={handleSelectChange}>
          <option value="" disabled defaultValue={title}>
            {title}
          </option>
          <option value="sun">Sunday</option>
          <option value="mon">Monday</option>
          <option value="tue">Tuesday</option>
          <option value="wed">Wednesday</option>
          <option value="thu">Thrusday</option>
          <option value="fri">Friday</option>
        </select>
      </div>
    </div>
  );
};

export default DaySelectorBox;
