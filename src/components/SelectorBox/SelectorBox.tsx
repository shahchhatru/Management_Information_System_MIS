import './styles.css';
import { useState, useEffect, ChangeEvent } from 'react';
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
}

const SelectorBox = ({ title ,link}: SelectorBoxProps) => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOptionValue = event.target.value;
    setSelectedValue(selectedOptionValue);
    console.log('Selected value:', selectedOptionValue);
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
