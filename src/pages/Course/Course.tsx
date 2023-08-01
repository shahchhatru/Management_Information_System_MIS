import { useParams } from "react-router-dom";
import {useState,useRef,useEffect} from 'react';
import './styles.css'
import { StudentCard } from "../../components";
import {motion} from 'framer-motion';

const Course = () => {
  let {id} =useParams();
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
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
        <StudentCard/>
        <StudentCard/>
        <StudentCard/>
        <StudentCard/>
        <StudentCard/>
        <StudentCard/>
        <StudentCard/>
        <StudentCard/>
        <StudentCard/>
        <StudentCard/>
        </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Course;