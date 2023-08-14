import styles from "./styles.module.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"; // Import useLocation
import { motion } from "framer-motion";
import RoutineCard from "../../components/RoutineCard/RoutineCard";

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

interface Teacher {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  subject: string[]; // Array of subject URLs
}

interface Subject {
  id: number;
  name: string;
  year: string; // URL to year
  semester: string[]; // Array of semester URLs
  student: string[]; // Array of student URLs
}

const ViewTeacherRoutine = () => {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const location = useLocation();
  // Fetch the state using useLocation
  const { myRoutines, type }: { myRoutines: Routine[] | null; type: string } =
    location.state;

  const dayToRoutines: { [key: string]: Routine[] } = {};
  if (myRoutines) {
    myRoutines.forEach((routine) => {
      const day = routine.day;
      if (!dayToRoutines[day]) {
        dayToRoutines[day] = [];
      }
      dayToRoutines[day].push(routine);
    });
  }

  useEffect(() => {
    if (carousel.current) {
      setWidth(
        carousel.current.scrollWidth - carousel.current.offsetWidth + 200
      );
    }
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/teachers/");
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    const fetchSubjects = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/subjects/");
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchTeachers();
    fetchSubjects();
  }, []);

  const teacherDictionary: { [key: number]: string } = {};
  teachers.forEach((teacher) => {
    teacherDictionary[teacher.id] = teacher.name;
  });

  const subjectDictionary: { [key: number]: string } = {};
  subjects.forEach((subject) => {
    subjectDictionary[subject.id] = subject.name;
  });
  return (
    <div className={styles.teacherRoutineContainer}>
      <div className={styles["header"]}>
        <h1>{type=="room"?"Teacher Routine":"Class Routine"}</h1>
      </div>
      {Object.entries(dayToRoutines).map(([day, routines]) => (
      <div key={day} className={styles.carouselContainer}>
        <h2>{day}</h2>
        <motion.div
          className={styles.carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className={styles["inner-carousel"]}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {routines.map((routine, index) => (
              <div className={styles["item"]} key={index}>
                <RoutineCard
                  routine={routine}
                  teacher_name={teacherDictionary[routine.teacher]}
                  subject_name={subjectDictionary[routine.subject]}
                  type={type}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    ))}
     
    </div>
  );
};

export default ViewTeacherRoutine;

/**
 *  <motion.div
        ref={carousel}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles["inner-carousel"]}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {myRoutines ? (
            myRoutines.map((routine, index) => (
              <div className={styles["item"]} key={index}>
                <RoutineCard
                  key={index}
                  routine={routine}
                  teacher_name={teacherDictionary[routine.teacher]}
                  subject_name={subjectDictionary[routine.subject]}
                  type={type}
                />
              </div>
            ))
          ) : (
            <p>No routines available</p>
          )}
        </motion.div>
      </motion.div>
 */