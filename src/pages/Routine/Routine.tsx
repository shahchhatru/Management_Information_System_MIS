
import { useLocation } from 'react-router-dom';

interface Routine {
  id: number;
  teacher: number;
  subject: number;
  year: number;
  course: number;
  day: string;
  time_start: string;
  time_end: string;
  session_type: string;
  room_number: string;
}

const Routine = () => {
  const location = useLocation(); // Initialize useLocation
  const { myRoutines }: { myRoutines: Routine[] } = location.state; // Fetch the state data

  return (
    <div>
      <h1>Routine page</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Teacher</th>
              <th>Subject</th>
              <th>Start_time</th>
              <th>End_time</th>
              <th>day</th>
              <th>type</th>
              {/* ... Add more columns */}
            </tr>
          </thead>
          <tbody>
            {myRoutines.map((routine) => (
              <tr key={routine.id}>
                <td>{routine.id}</td>
                <td>{routine.teacher}</td>
                <td>{routine.subject}</td>
                <td>{routine.time_start}</td>
                <td>{routine.time_end}</td>
                <td>{routine.day}</td>
                <td>{routine.session_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Routine;
