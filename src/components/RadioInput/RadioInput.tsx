import React from 'react';
import { Action } from '../../typesd';
import './styles.css';

interface RadioInputProps {
  dispatch?: React.Dispatch<Action> | null;
}

const RadioInput = ({ dispatch }: RadioInputProps) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;

    if (dispatch) {
      console.log("session_type",selectedValue);
      dispatch({
        type: 'UPDATE_FORM_FIELD',
        field: 'session_type', // Adjust the field name according to your form structure
        value: selectedValue,
      });
    }
  };

  return (
    <div className="radio-input-container">
      <input
        type="radio"
        name="lecture-type"
        id="lecture"
        value="lecture"
        onChange={handleRadioChange}
      />
      <label htmlFor="lecture">Lecture</label>
      <input
        type="radio"
        name="lecture-type"
        id="Tutorial"
        value="tutorial"
        onChange={handleRadioChange}
      />
      <label htmlFor="Tutorial">Tutorial</label>
      <input
        type="radio"
        name="lecture-type"
        id="Lab"
        value="lab"
        onChange={handleRadioChange}
      />
      <label htmlFor="Lab">Lab</label>
    </div>
  );
};

export default RadioInput;
