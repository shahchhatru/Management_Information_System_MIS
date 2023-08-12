import './styles.css'

import { sendAttendance } from '../../utils';

interface StudentProps{
    name:String;
    roll_no:String;
    sid:number;
    course_id:string;

}

interface AttendenceIns{
    student:number;
    subjectIns:number;
    attendance_date:string;
    attendance_status:string;
  
}

// const apiUrl = 'http://127.0.0.1:8000/api/attendances/';


const StudentCard = ({name,roll_no,sid,course_id}:StudentProps) => {

    function getCurrentFormattedDate(): string {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
      
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      }

    const handlePresentButtonClick = (id:number,status:string) => {
        const attendanceObject: AttendenceIns = {
          student: id,
          subjectIns: Number(course_id),
          attendance_date: getCurrentFormattedDate(),
          attendance_status: status,
        };
    
        sendAttendance(attendanceObject);
      };

  return (
    <div className='student-container'>
        <div className='profile-container'>
            <img src="/cuteboy.jpg" />
        </div>
        <div className='stu-body'>
            <div className='desc'>
                <h1>{name}</h1>
                <h2>{roll_no}</h2>
            </div>
            <div className='btn-container'>
                <button className='button-77 absent' onClick={()=>handlePresentButtonClick(sid,'0')} >Absent</button>
                <button className='button-77 present' onClick={()=>handlePresentButtonClick(sid,'1')}>Present</button>
            </div>
        </div>
    </div>
  )
}

export default StudentCard