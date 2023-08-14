import React ,{ useReducer } from "react";
import axios from "axios";
import "./styles.css";
import InputBox from "../../components/InputBox/InputBox";
import SelectorBox from "../../components/SelectorBox/SelectorBox";
import RadioInput from "../../components/RadioInput/RadioInput";
import DaySelectorBox from "../../components/SelectorBox/DaySelectorBox";
import { FormValueProps, Action } from '../../typesd.ts';

 
// interface FormValueProps{
//         teacher: number;
//         subject: number;
//         year: number,
//         course: number;
//         day: string;
//         time_start: string,
//         time_end: string,
//         session_type: string,
//         room_number: string
// }

const formData: FormValueProps = {
  teacher: 123,
  subject: 456,
  year: 2023,
  course: 789,
  day: "Monday",
  time_start: "08:00 AM",
  time_end: "10:00 AM",
  session_type: "Lecture",
  room_number: "A101"
};

// type Action = {
//   type: string;
//   field: keyof FormValueProps;
//   value: FormValueProps[keyof FormValueProps] | null;
// };

// const FormContext = createContext<{
//   state: FormValueProps;
//   dispatch: React.Dispatch<Action>;
// } | undefined>(undefined);


function formReducer(state: FormValueProps, action: Action): FormValueProps {
  switch (action.type) {
      case 'UPDATE_FORM_FIELD':
          return {
              ...state,
              [action.field]: action.value
          };
      default:
          return state;
  }
}





const AddPeriod =  () => {
  const [state, dispatch] = useReducer(formReducer, formData);

  const handleSubmit =  async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form Data:", state);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/routines/', state);
      console.log('POST Request Response:', response.data);
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  return (
   
    <div className="add_period_container">
      <h1>ADD PERIOD</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-page-container">
          <div className="inlabel-group" style={{alignItems:"baseline"}}>
            <InputBox name="Room Number" width="400px" inputId="firstname" vfield="room_number" dispatch={dispatch}/>
            <DaySelectorBox title="choose day" vfield="day" dispatch={dispatch}/>
          </div>
         
          <div className="box">
            <SelectorBox
              title="Choose Teacher"
              link="http://127.0.0.1:8000/api/teachers/"
              vfield="teacher"
              dispatch={dispatch}
            />
            <SelectorBox
              title="Choose Subject"
              link="http://127.0.0.1:8000/api/subjects/"
              vfield="subject"
              dispatch={dispatch}
            />
          </div>
          <div className="box">
            <SelectorBox
              title="Choose Year"
              link="http://127.0.0.1:8000/api/years/"
              vfield="year"
              dispatch={dispatch}
            />
            <SelectorBox
              title="Choose course"
              link="http://127.0.0.1:8000/api/courses/"
              vfield="course"
              dispatch={dispatch}
            />
          </div>
          <div className="inlabel-group">
            <InputBox name="start-time" width="400px" inputId="Start-Time" vfield="time_start" dispatch={dispatch}/>
            <InputBox name="end-time" width="400px" inputId="Start-Time" vfield="time_end" dispatch={dispatch}/>
          </div>
          <div className="box">
            <RadioInput dispatch={dispatch}/>
          </div>
        </div>
        <div className="buttonContainer" style={{marginRight:"100px"}}>
          <button
            className="button-77"
            role="button" >
           Submit
          </button>
        </div>
      </form>
    </div>
    

  );
};

export default AddPeriod;
