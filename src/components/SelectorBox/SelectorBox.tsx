import './styles.css';
import React,{ useState, useEffect, ChangeEvent } from 'react';
import { Action } from '../../typesd.ts';
import axios from 'axios';

interface Teacher {
  url: string;
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  subject: string[];
}

interface SelectorBoxProps {
  title: string;
  link:string;
  vfield?:string;
  dispatch?:React.Dispatch<Action>|null;
}

const SelectorBox = ({ title ,link,vfield,dispatch}: SelectorBoxProps) => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  //const [selectedValue, setSelectedValue] = useState<string>('');

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


  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(link);
        setTeachers(response.data);
        console.log("response.data", response.data);
        console.log("teachers", teachers);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="selectbox-container">
      <div className="select">
        <select name="format" id="format" style={{ width: "400px" }} onChange={handleSelectChange}>
          <option value="" disabled>
            {title}
          </option>
          {teachers.map((teacher) => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.name}
            </option>
          ))}
          
        </select>
      </div>
    </div>
  );
};

export default SelectorBox;
