
import { SideBar } from './components';



import './App.css'
import { Route, Routes } from 'react-router-dom';
import RegisterStudents from './pages/RegisterStudents';

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
     </Routes>
     </div>
    </div>
    
    </>
  )
}

export default App
