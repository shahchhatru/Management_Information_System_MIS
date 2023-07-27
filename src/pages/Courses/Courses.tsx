import './styles.css'
import { CourseCard } from '../../components'

const Courses = () => {
  return (
    <div className='courses-container'>
        <div className="header-section">

        </div>
        <div className='body-section'>
           <CourseCard />
           
            <CourseCard/>
            <CourseCard/>
        

        </div>
        <div className='footer-section'>

        </div>
    </div>
  )
}

export default Courses