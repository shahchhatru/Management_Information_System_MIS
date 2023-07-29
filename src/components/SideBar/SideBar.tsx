import {useState} from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import "./sideBar.css"

const SideBar = () => {
    const [isopen,setIsOpen]=useState<boolean>(true);
   
  return (
    <nav className="sidebar">
    <header>
      <div className="image-text">
        <span className="image">
          <img src="https://freesvg.org/img/1291146679.png" alt="logo" />
        </span>
        <div className="text header-text">
          <span className="name">MIS</span>
          <span className="profession">DoECE</span>
        </div>
      </div>
      <i className='bx bx-chevron-right toggle'></i>
    </header>
    <li className="search-box">
        <i className='bx bx-search-alt-2 icon' ></i>
        <input type="search" placeholder="search" />
     </li>
    <div className="menu-bar">
      <div className="menu">
        <ul className="menu-links">
          <li className="nav-link">
            <Link to="/">
              <i className='bx bx-home icon'></i>
              <span className="text nav-text">Dashboard</span>
            </Link>
          </li>
             <li className="nav-link">
            <a href="#">
           <i className='bx bxs-edit icon' ></i>
              <span className="text nav-text">Notes</span>
            </a>
          </li>
             <li className="nav-link">
            <Link to="/courses">
             <i className='bx bx-code-block icon' ></i>
              <span className="text nav-text">Courses</span>
            </Link>
          </li>
             <li className="nav-link">
            <a href="#">
             <i className='bx bx-bell icon' ></i>
              <span className="text nav-text">Notifications</span>
            </a>
          </li>
             <li className="nav-link">
            <a href="#">
              <i className='bx bx-chat icon' ></i>
              <span className="text nav-text">Chats</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom-content">
         <li className="nav-link">
            <a href="#">
              <i className='bx bx-log-out icon' ></i>
              <span className="text nav-text">Log out</span>
            </a>
          </li>
         <li className="mode">
           <div className="moon-sun">
              <i className='bx bx-moon icon moon' ></i>
              <i className='bx bx-sun icon sun' ></i>
           </div>
           <span className="mode-text text"> DarkMode</span>
           <div className="toggle-switch">
             <span className="switch"></span>
           </div>
          </li>
      </div>
    </div>
  </nav>
  )
}

export default SideBar