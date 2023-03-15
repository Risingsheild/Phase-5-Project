import { NavLink } from "react-router-dom";
import {SlCalender} from "react-icons/sl"
import {FaPrescriptionBottleAlt} from "react-icons/fa" 
import {BsFillFilePersonFill } from "react-icons/bs"
import {AiOutlineSchedule} from 'react-icons/ai'

import './Portal.css'


function Portal({ user }) {
  return (
    <div className="portal">
      {user.doc ? (
        <div className="navlinks">
          <NavLink to="/portal/patients" style={{color: '#050', fontWeight: "bolder", background: "yellow" }}><BsFillFilePersonFill/>Patients</NavLink>
          <NavLink to="/portal/calendar"style={{color: '#050', fontWeight: "bolder", background: "yellow" }}><SlCalender/> Calendar </NavLink>
        </div>
      ) : (
        <div className="navlinks">
            <NavLink to='/portal/prescriptions'style={{color: '#050', fontWeight: "bolder", background: "yellow" }}><FaPrescriptionBottleAlt/>My Prescriptions</NavLink>
            <NavLink to='/portal/appointments'style={{color: '#050', fontWeight: "bolder", background: "yellow" }}><AiOutlineSchedule/> My Appointments</NavLink>
        </div>
      )}
    </div>
  );
}

export default Portal
