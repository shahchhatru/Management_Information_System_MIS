import './styles.css'
import { CourseCard } from '../../components'
import {useState,useRef,useEffect} from 'react';
import {motion} from 'framer-motion';


const Courses = () => {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth+100);
    }
  }, []);
  return (
    <div className='courses-container'>
        <div className="header-section">

        </div>
        <div className='body-section'>
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
           <CourseCard />
           
            <CourseCard/>
            <CourseCard/>
            <CourseCard />
           
           <CourseCard/>
           <CourseCard/>
        
        </motion.div>
        </motion.div>
        </div>
        <div className='footer-section'>

        </div>
    </div>
  )
}

export default Courses