import {useState} from 'react';
import {motion} from 'framer-motion';
import "./sideBar.css"

const SideBar = () => {
    const [isopen,setIsOpen]=useState<boolean>(true);
    const sideBarvariants={
        open:{
            opacity:1,
            height:"100vh",
            borderRadius:"0%",
            width:"auto",
            padding:"20px"
        },
        closed:{
            opacity:0.8,
            borderRadius:"50%",
            width:"fit-content",
            height:"fit-content",
            padding:"2px",
           
           
        }
    }

    const variants = {
        open:{
            opacity:1,
            x:0,
            
            transition:{
                staggerChildren:0.3,
                delayChildren:0.3,
                duration:2,
            },
        },
        closed:{
            opacity:0,
            x:'-20%',
            display:"none",
            transition:{
                staggerChildren:0.1,
                staggerDirection:-1,
            }
        }
    }

    const headerVariants={
        open:{
            top:"0",
            left:"0",
        },
        closed:{
           
            top:"16px",
            left:"24%",
            scale:'0.9',
        }
    }

    const listItemVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '-50%' }, // Adjust the x value to control the exit animation
      };
  return (
    <motion.nav className='sidebar-container'  animate={isopen ? 'open' : 'closed'}
    variants={sideBarvariants}>
        <motion.div className='header' animate={isopen?'open':'closed'} variants={headerVariants}>
            <div className='img-container' onClick={()=>setIsOpen(!isopen)}>
                <img src="/Logo.svg" alt="logo" />
            </div>
            {
                isopen?<div className='heading'>MIS</div>:''
            }
            
        </motion.div>
        
        <motion.ul className='sidebar-body'
        initial={false}
        animate={isopen ? 'open' : 'closed'}
        variants={variants}>
          <motion.li variants={listItemVariants}>Profile</motion.li>
          <motion.li variants={listItemVariants}>Class</motion.li>
          <motion.li variants={listItemVariants}>Attendence</motion.li>
          <motion.li variants={listItemVariants}>Notice</motion.li>
        </motion.ul>
     
    </motion.nav>
  )
}

export default SideBar