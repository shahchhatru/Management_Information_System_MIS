import React,{useState} from 'react';
import {motion} from 'framer-motion';
import './regstudent.css';
import StudhatAni from '../components/animation/StudhatAni';


const RegisterStudents=()=>{

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
                <StudhatAni/>
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
                        <input type="text" id="fname"  name="fname" placeholder='First Name'/>
                        <input type="text" id="lname" name="lname" placeholder="Last Name" />
                    </div>
                    <div className='inlabel-group'>
                        <input type="text" id="batch"  name="batch" placeholder='077'/>
                        <input type="text" id="department" name="department" placeholder="BCT" />
                    </div>
                    <div className='inlabel-group'>
                        <input type="text" id="phone no"  name="phone-no" placeholder='tel no'/>
                        <input type="text" id="address" name="address" placeholder="address" />
                    </div>
                    </motion.div>
                    <motion.div animate={pageno>=2?{width:"0%"}:''} className='form-page two'>
                    <div className='inlabel-group'>
                        <input type="text" id="paddress"  name="paddress" placeholder='Permanent Address'/>
                        <input type="text" id="district" name="district" placeholder="District" />
                    </div>
                    <div className='inlabel-group'>
                        <input type="text" id="municipality"  name="municipality" placeholder='Municipality'/>
                        <input type="text" id="province" name="province" placeholder="province" />
                    </div>
                    <div className='inlabel-group'>
                        <input type="text" id="permanentTelno"  name="permaContact" placeholder='per contact no'/>
                        <input type="text" id="citizenship" name="citizenship" placeholder="citizenshipid" />
                    </div>
                    </motion.div>
                    </div>
                    <div className='buttonContainer'>
                    <button className='button-63' role="button" onClick={(e)=>{handleClick(e)}}> Next</button>
                    </div>
                </form>
            </div>
        </motion.div>
        </>
    )
}

export default RegisterStudents;