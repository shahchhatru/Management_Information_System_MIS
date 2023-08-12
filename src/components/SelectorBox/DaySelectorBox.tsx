import './styles.css';



interface SelectorBoxProps {
  title: string;
}

const DaySelectorBox = ({ title }: SelectorBoxProps) => {
  

  return (
    <div className="selectbox-container">
      <div className="select">
        <select name="format" id="format" style={{ width: "400px" }}>
          <option value="" disabled selected>
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
