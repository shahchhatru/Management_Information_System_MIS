import {RiLoginBoxLine} from '@react-icons/all-files/ri/RiLoginBoxLine';
import {DiGoogleAnalytics} from '@react-icons/all-files/di/DiGoogleAnalytics';
import{MdSettings} from '@react-icons/all-files/md/MdSettings';
import './styles.css'
import { Link } from 'react-router-dom';

const CourseCard = () => {
  return (
    <div className='coursecard-container'>
        <div className='logo-container'>
            <img src="https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=1380&t=st=1690447495~exp=1690448095~hmac=e22e7084258df2035cd1b336b407e78f622f40c51fe8577288aa1e4e7a44042c" />
        </div>
        <div className='body-container'>
            <div className='top-bar'>
              <Link to="/">
              <span className='icon'><DiGoogleAnalytics/></span>
              </Link>
             <Link to="/">
              <span className='icon'><MdSettings/></span>
              </Link>
              <Link to="/courses/1">
              <span className='icon'><RiLoginBoxLine/></span>
              </Link>
            </div>
            <div className='desc'>
                <h1>CN 506</h1>
                <h2>Section :AB</h2>
                <h3>Batch:076</h3>
                <p>Short Description</p>
            </div>
        </div>
    </div>
  )
}

export default CourseCard