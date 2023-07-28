import { useParams } from "react-router-dom";
import './styles.css'
import { StudentCard } from "../../components";

const Course = () => {
  let {id} =useParams();
  return (
    <div className="course-container">
      <div className="head">
        {id}
      </div>
      <div className="body">
        <StudentCard/>
        <StudentCard/>
      </div>
    </div>
  )
}

export default Course