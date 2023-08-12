import "./styles.css";
import InputBox from "../../components/InputBox/InputBox";
import SelectorBox from "../../components/SelectorBox/SelectorBox";
import RadioInput from "../../components/RadioInput/RadioInput";
import DaySelectorBox from "../../components/SelectorBox/DaySelectorBox";

const AddPeriod = () => {
  return (
    <div className="add_period_container">
      <h1>ADD PERIOD</h1>
      <form>
        <div className="form-page-container">
          <div className="inlabel-group" style={{alignItems:"baseline"}}>
            <InputBox name="Room Number" width="400px" inputId="firstname" />
            <DaySelectorBox title="choose day" />
          </div>
          <div className="box">
            <SelectorBox
              title="Choose Teacher"
              link="http://127.0.0.1:8000/api/teachers/"
            />
            <SelectorBox
              title="Choose Subject"
              link="http://127.0.0.1:8000/api/subjects/"
            />
          </div>
          <div className="box">
            <SelectorBox
              title="Choose Year"
              link="http://127.0.0.1:8000/api/years/"
            />
            <SelectorBox
              title="Choose course"
              link="http://127.0.0.1:8000/api/courses/"
            />
          </div>
          <div className="inlabel-group">
            <InputBox name="start-time" width="400px" inputId="Start-Time" />
            <InputBox name="end-time" width="400px" inputId="Start-Time" />
          </div>
          <div className="box">
            <RadioInput />
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
