import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDepartments } from "./TableSlices/departmentsSlice.js";
import { fetchDoctors } from "./TableSlices/doctorsSlice.js"
import { fetchPatients } from "./TableSlices/patientsSlice.js"
import { fetchAppointments } from './TableSlices/appointmentsSlice.js'
import { fetchPrescriptions } from './TableSlices/prescriptionsSlice.js'


import Home from "./Components/Home/Home.js";
import Login from "./Components/Login/Login.js";
import NavBar from "./Components/NavBar/NavBar.js";
import Departments from "./Components/Departments/Departments.js";
import Doctor from "./Components/Doctors/Doctor.js";
import DepartmentDoctor from "./Components/DepartmentDoctor/DepartmentDoctor.js";
import Portal from "./Components/Portal/Portal.js";
import PortalAppts from "./Components/PortalAppts/PortalAppts.js";
import PortalPatients from "./Components/PortalPatients/PortalPatients.js";

function App() {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null);
  const [dept, setDept] = useState(null)
  const [doc, setDoc] = useState(null)
  const [patientAppts, setPatientAppts] = useState([])
  const [patientNames, setPatientNames] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() =>{
    dispatch(fetchAppointments())
    .then(fetchDepartments())
    .then(dispatch(fetchDoctors()))
    .then(dispatch(fetchPatients()))
    .then(dispatch(fetchPrescriptions()))
  },[dispatch])

  const departments = useSelector(state => state.departments.entities)
  const doctors = useSelector(state => state.doctors.entities)
  const patients = useSelector(state => state.patients.entities)
  const appointments = useSelector(state => state.appointments.entities)
  const prescriptions = useSelector(state => state.prescriptions.entities)

  useEffect(() => {
    if(user && !user.doc){
      setPatientAppts(appointments.filter(appt => appt.patient_id === user.id))
    } 
    if(user && user.doc){
      setPatientNames(patients.map(p => ({id: p.id, text: p.name})))
    }
  }, [user])

  function filterPatients(){
    if (search === ''){
      return patients
    } else {
      return patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }
  }



  return (
    <div className="App">
        <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route exact path='/' element={ <Home/> }/>
            <Route exact path='/login' element={<Login setUser={setUser}/>}/>
            <Route exact path="/departments" element={<Departments departments={departments} setDept={setDept}/>}/>
            <Route exact path="/departments/:id" element={<DepartmentDoctor dept={dept} doctors={doctors} setDoc={setDoc}/> }/>
            <Route exact path='/doctors/:id' element={<Doctor doc={doc}/>}/>
            <Route exact path='/portal' element={<Portal user={user}/>}/>
            <Route exact path="/portal/appointments" element={<PortalAppts patientAppts={patientAppts} user={user}/>}/>
            <Route exact path='/portal/patients' element={<PortalPatients patients={filterPatients()} docAppointments={appointments} search={search} setSearch={setSearch} user={user} />}/>
          </Routes>
        
    </div>
  );
}

export default App;
