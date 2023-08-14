import React from 'react';

import './styles.css';

interface RadioInputProps{
    setState:React.Dispatch<React.SetStateAction<string>>;
}


const SRadioInput = ({ setState }: RadioInputProps) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
        setState(selectedValue);
  };

  return (
    <div className="radio-input-container">
      <input
        type="radio"
        name="lecture-type"
        id="lecture"
        value="1"
        onChange={handleRadioChange}
      />
      <label htmlFor="lecture">Teacher</label>
      <input
        type="radio"
        name="lecture-type"
        id="Tutorial"
        value="2"
        onChange={handleRadioChange}
      />
      <label htmlFor="Tutorial">RoomNumber</label>
    </div>
  );
};

export default SRadioInput;
