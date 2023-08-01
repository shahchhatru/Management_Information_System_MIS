import { SideBar } from './components';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Courses, Login ,Course,RegisterTeacher, Dashboard} from './pages';
import PageNotFound from './pages/NotFound/PageNotFound';

function App() {
  

  return (
    <>
    <div className='container'>
    <div>
    <SideBar />
    </div>
     <div className='container-two'>
     <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register">
        <Route path="teacher" element={<RegisterTeacher/>}/>
      </Route>
      <Route path="/courses">
        <Route path="" element={<Courses/>} />
        <Route path=":id" element={<Course/>} />
        
      </Route>
      <Route path="/*" element={<PageNotFound/>} />
     </Routes>
     </div>
    </div>
    
    </>
  )
}

export default App
