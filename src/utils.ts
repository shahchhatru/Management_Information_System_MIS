// utils.ts

import axios , { AxiosResponse, AxiosError }from 'axios';

interface Student {
  url: string;
  id: number;
  name: string;
  roll_no: string;
}

async function fetchStudents(): Promise<Student[]> {
  const apiUrl = 'http://127.0.0.1:8000/api/students/';

  try {
    const response = await axios.get(apiUrl,{
        params: {
            "content-type": "application/json",
          }});
    const dataArray: Student[] = response.data;
    console.log("data",dataArray);
    return dataArray;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

//post attendence //send attendence

interface AttendenceIns{
  student:number;
  subjectIns:number;
  attendance_date:string;
  attendance_status:string;

}

async function sendAttendance(attendance: AttendenceIns): Promise<void> {
  const apiUrl = 'http://127.0.0.1:8000/api/attendances/';

  try {
    const response: AxiosResponse = await axios.post(apiUrl, attendance);
    console.log('Attendance successfully sent:', response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Error:', error);
    }
  }
}






export { fetchStudents,sendAttendance };







