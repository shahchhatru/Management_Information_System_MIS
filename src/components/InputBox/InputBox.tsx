
import './styles.css'

interface InputBoxProps{
  name:string;
  width:string;
  inputId:string;

}

const InputBox = ({name,width,inputId}:InputBoxProps) => {
  return (
   
      <div className="inputBox" style={{width:width}}>
        <input id={inputId} type="text" required={true} />
        <span>{name} </span>
      </div>
   
  );
};

export default InputBox;
