import "./styles.css";
import RadioInput from "../../components/RadioInput/RadioInput";
import SelectorBox from "../../components/SelectorBox/SelectorBox";
const Routines = () => {
  return (
    <div className="routines-container">
      <div className="routines-sub-container">
        <div className="routine-tab">
          <RadioInput />
        </div>
        <div className="routine-form-pages">
          <div className="routine-page page-1">
            <form>
              <div className="form-page-container">
                <div className="box">
                  <SelectorBox
                    title="Choose Teacher"
                    link="http://127.0.0.1:8000/api/teachers/"
                  />
                  <SelectorBox
                    title="Choose Subject"
                    link="http://127.0.0.1:8000/api/courses/"
                  />
                  <button className="button-77" role="button">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="routine-page page-2">
            <form>
              <div className="form-page-container">
                <div className="box">
                  <SelectorBox
                    title="Choose Teacher"
                    link="http://127.0.0.1:8000/api/teachers/"
                  />
                  <button className="button-77" role="button">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="routine-page page-3">
          <form>
              <div className="form-page-container">
                <div className="box">
            <SelectorBox
              title="Choose Courses"
              link="http://127.0.0.1:8000/api/courses/"
            />
            <button className="button-77" role="button">
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
