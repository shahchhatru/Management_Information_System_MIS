import { AdminOptionCard } from "../../components";
import {useState,useRef,useEffect}  from 'react';

import {motion} from 'framer-motion'

import "./styles.css";
const Dashboard = (): JSX.Element=> {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (carousel.current) {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth +100);
    }
  });

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Dashboard</h1>
      </div>
      <div className="activity-container">
        <h2>Actions</h2>
        <motion.div 
           ref={ carousel }
          className="carousel"
           whileTap={{ cursor: "grabbing" }}
        >
        <motion.div 
        className="activity-list"
        drag="x"
       dragConstraints={{right: 0, left: -width}}
        >
        

       
        <AdminOptionCard
            linkaddr="/register/teacher"
            Iid="1"
            imgPath="/office.svg"
            imgtext="create teacher"
            title="Register Teacher"
          />
           <AdminOptionCard
            linkaddr="/routine/add"
            Iid="1"
            imgPath="/office.svg"
            imgtext="create Period"
            title="Add Period"
          />
          <AdminOptionCard
          linkaddr="/routine"
          Iid="2"
          imgPath="/student.svg"
          imgtext="view Routines"
          title="View Routines"
          />
          <AdminOptionCard
            linkaddr="/register/teacher"
            Iid="1"
            imgPath="/office.svg"
            imgtext="create teacher"
            title="Register Teacher"
          />
          <AdminOptionCard
            linkaddr="/register/teacher"
            Iid="1"
            imgPath="/office.svg"
            imgtext="create teacher"
            title="Register Teacher"
          />
          <AdminOptionCard
            linkaddr="/register/teacher"
            Iid="1"
            imgPath="/office.svg"
            imgtext="create teacher"
            title="Register Teacher"
          />
        </motion.div>
        </motion.div>
      

      </div>
     
      <div className="event-container">
        <h2>Recent Events</h2>
        <div className="event-list">
    
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
