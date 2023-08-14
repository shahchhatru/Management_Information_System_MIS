import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./styles.css";
import RadioInput from "../../components/RadioInput/RadioInput";
import SSelectorBox from '../../components/SelectorBox/SSelextorBox';
import SInputBox from '../../components/InputBox/SInputBox';

interface Routine {
  id: number;
  teacher: number;
  subject: number;
  year: number;
  course: number;
  day: string;
  time_start: string;
  time_end: string;
  session_type: string;
  room_number: string;
}

const Routines = () => {
  const navigate=useNavigate();
  const [routines, setRoutines] = useState<Routine[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const fetchRoutines = async (url: string,type:string) => {
    try {
      const response = await axios.get(url);
      setRoutines(response.data);
      console.log("routines.data",response.data)
      navigate("/routine/view-teacher-routine", { state: { myRoutines: response.data,type:type } })
    } catch (error) {
      console.error('Error fetching routines:', error);
      alert('Error fetching routines:'+ error);
    }
  };

  const handleSearchByTeacher = () => {

    if (selectedTeacher !== null) {
      const url = `http://127.0.0.1:8000/api/routines/get_routines_by_teacher/?teacher_id=${selectedTeacher}`;
      fetchRoutines(url,"room");
      
    }
  };

  const handleSearchByRoom = () => {
    if (selectedRoom !== null) {
      const url = `http://127.0.0.1:8000/api/routines/get_routines_by_room/?room_number=${selectedRoom}`;
      fetchRoutines(url,'teacher');
    }
  };

  const handleSearchByTeacherAndRoom = () => {
    if (selectedTeacher !== null && selectedRoom !== null) {
      const url = `http://127.0.0.1:8000/api/routines/get_routines_by_teacher_and_room/?teacher_id=${selectedTeacher}&room_number=${selectedRoom}`;
      fetchRoutines(url,'both');
    }
  };

  return (
    <div className="routines-container">
      <div className="routines-sub-container">
        <div className="routine-tab">
          <RadioInput />
        </div>
        <div className="routine-form-pages">
          <div className="routine-page page-1">
            <form onSubmit={(e)=>{
              e.preventDefault();
              handleSearchByTeacherAndRoom();
            }}>
              <div className="form-page-container">
                <div className="box">
                  <SSelectorBox
                    title="Choose Teacher"
                    link="http://127.0.0.1:8000/api/teachers/"
                    setState={setSelectedTeacher}
                  />
                  <SInputBox
                    name="Enter Room No"
                    setState={setSelectedRoom}
                    width="400px"
                    inputId="room-no"
                  />
                  <button
                    className="button-77 b1"
                    role="button"
                   type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="routine-page page-2">
            <form onSubmit={(e)=>{
              e.preventDefault();
              handleSearchByTeacher();
            }}>
              <div className="form-page-container">
                <div className="box">
                  <SSelectorBox
                    title="Choose Teacher"
                    link="http://127.0.0.1:8000/api/teachers/"
                    setState={setSelectedTeacher}
                  />
                  <button
                    className="button-77 b2"
                    role="button"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="routine-page page-3">
            <form onSubmit={(e)=>{
              e.preventDefault();
              handleSearchByRoom();
            }}>
              <div className="form-page-container">
                <div className="box">
                <SInputBox
                    name="Enter Room No"
                    setState={setSelectedRoom}
                    width="400px"
                    inputId="room-no"
                  />
                  <button
                    className="button-77 b3"
                  role="button"
                   type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routines;
