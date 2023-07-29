import React,{useState} from 'react';
import {motion} from 'framer-motion';
import './regstudent.css';
import StudhatAni from '../../components/animation/StudhatAni';
import InputBox from '../../components/InputBox/InputBox';


const RegisterTeacher=()=>{

    const [pageno,setPageno]=useState<number>(0);

    const handleClick=(event: React.MouseEvent<HTMLButtonElement>):void =>{
        event.preventDefault();
        setPageno(pageno+1);
        if((pageno+1)===5){
            setPageno(0)
        }
    }

    return(
        <>
       
        <motion.div className="stu_reg_container"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.4}}
        >
            <div className='ani-container'>
              <div className="sub-section general-infor">
              <i className='bx bx-user'></i>
              <span>General</span>
              </div>
              <div className="sub-section address">
              <i className='bx bxs-map' ></i>
                <span>Address</span>
              </div>
              <div className="sub-section edu-qualification">
              <i className='bx bxs-book-heart'></i>
              <span>Education</span>
              </div>
              <div className="sub-section success">
              <i className='bx bx-party' ></i>
              <span>Completed</span>
              </div>
            </div>
            <div className='form-container'>
                <div className="form-circle-no">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>
                <form>
                    <div className='form-page-container'>
                    <motion.div animate={pageno>=1?{width:"0%"}:''} className='form-page one'>
                    <div className='inlabel-group'>
                        <InputBox name="First Name" width="300px" inputId="firstname"/>
                        <InputBox  name="Last Name" width="300px" inputId="lastname"/>
                    </div>
                    
                    <div className='inlabel-group'>
                        <InputBox  name="Roll No" width="300px" inputId="rollno"/>
                        <InputBox  name="Year" width="300px" inputId="Year"/>
                    </div>
                    <div className='inlabel-group'>
                        <InputBox  name="Address" width="300px" inputId="address"/>
                        <InputBox  name="Street" width="300px" inputId="street"/>
                    </div>
                   
                    </motion.div>
                    <motion.div animate={pageno>=2?{width:"0%"}:''} className='form-page two'>
                    
                    </motion.div>
                    </div>
                    <div className='buttonContainer'>
                    <button className='button-77' role="button" onClick={(e)=>{handleClick(e)}}> Next</button>
                    </div>
                </form>
            </div>
        </motion.div>
        </>
    )
}

export default RegisterTeacher;