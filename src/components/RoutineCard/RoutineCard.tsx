import React, { useEffect, useState } from 'react';
import {BiTimeFive} from '@react-icons/all-files/bi/BiTimeFive';
import {GiSandsOfTime} from '@react-icons/all-files/gi/GiSandsOfTime';
import {FiEdit} from '@react-icons/all-files/fi/FiEdit';
import {AiOutlineDelete} from '@react-icons/all-files/ai/AiOutlineDelete';
import {GiTeacher} from '@react-icons/all-files/gi/GiTeacher'
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

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

interface RoutineCardProps {
  routine: Routine;
  teacher_name?:string; 
  subject_name?:string;
  // Accept routine as a prop
  type?:string;

}

const RoutineCard: React.FC<RoutineCardProps> = ({ routine,teacher_name,subject_name, type}) => {
  const {
    time_start,
    time_end,
    
    room_number,
    session_type,
   
  } = routine;

  
 



 
  return (
    <div className={styles['routinecard-container']}>
      <div className={styles['body-container']}>
        <div className={styles['top-bar']}>
          <div className={styles['start-time']}><span style={{color:"green"}}><BiTimeFive/></span>{time_start}</div>
          <div className={styles['end-time']}><span style={{color:"red"}}><GiSandsOfTime/></span>{time_end}</div>
            
          <Link to="#">
            <span className={styles['icon']} style={{color:"limegreen"}}>
            <FiEdit/>
            </span>
          </Link>
          <Link to="#">
            <span className={styles['icon']} style={{color:"red"}}>
              <AiOutlineDelete/>
            </span>
          </Link>
        </div>
        <div className={styles['desc']}>
          <h3>{type==="room"?`Room no: ${room_number}`:`teacher_name:${teacher_name}`}</h3>
          <h3><span style={{marginRight:'20px', color:'royalblue'}}><GiTeacher/></span>    {session_type}</h3>
          <p>subject:     {subject_name}</p>
        </div>
      </div>
    </div>
  );
};

export default RoutineCard;
