import { useParams } from "react-router-dom"
import './styles.css'

const Course = () => {
  let {id} =useParams();
  return (
    <div>Course {id}</div>
  )
}

export default Course