import './styles.css'

const RadioInput = () => {
  return (
    <div className="radio-input-container">
        <input type="radio" name="lecture-type" id="lecture" />
        <label htmlFor="lecture">Lecture</label>
        <input type="radio" name="lecture-type" id="Tutorial" />
        <label htmlFor="Tutorial">Tutorial</label>
        <input type="radio" name="lecture-type" id="Lab" />
        <label htmlFor="Lab">Lab</label>
    </div>
  )
}

export default RadioInput