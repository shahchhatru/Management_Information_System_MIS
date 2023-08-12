import { useParams } from "react-router-dom";
import {useState,useRef,useEffect} from 'react';
import './styles.css'
import { StudentCard } from "../../components";
import {motion} from 'framer-motion';
import { fetchStudents } from "../../utils";

interface Student {
  url: string;
  id: number;
  name: string;
  roll_no: string;
}

const Course = () => {
  let {id} =useParams();
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);
  const [students, setStudents] = useState<Student[]>([]);


  useEffect(() => {
    if (carousel.current) {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  },[
  carousel, 
  ]);

  useEffect(()=>{
    async function fetchData() {
      fetchStudents()
      .then(dataArray => {
        console.log("student  ",dataArray);
        setStudents(dataArray) ;// The data should be available here
      })
      .catch(error => {
        console.error('Error while fetching students:', error);
      });
    }
  
    fetchData();
    console.log("students 1",students);
  },[])
  return (
    <div className="course-container">
      <div className="head">
        {id}
      </div>
      <div className="body">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
        {
          students.map((student)=>{
            return(<StudentCard key={student.id} sid={student.id} course_id={id} name={student.name} roll_no={student.roll_no}/>)
          })
        }
        </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Course;