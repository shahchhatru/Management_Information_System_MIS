import { SideBar } from './components';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import RegisterStudents from './pages/RegisterStudents';
import { Courses, Login ,Course} from './pages';

function App() {
  

  return (
    <>
    <div className='container'>
    <div>
    <SideBar />
    </div>
     <div className='container-two'>
     <Routes>
      <Route path="/" element={<RegisterStudents/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/courses">
        <Route path="" element={<Courses/>} />
        <Route path=":id" element={<Course/>} />
      </Route>
     </Routes>
     </div>
    </div>
    
    </>
  )
}

export default App
