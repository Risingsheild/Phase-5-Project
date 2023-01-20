import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDepartments } from "./TableSlices/departmentsSlice.js";
import { fetchDoctors } from "./TableSlices/doctorsSlice.js"


import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Departments from "./Components/Departments/Departments";
import Doctor from "./Components/Doctors/Doctor";
import DepartmentDoctor from "./Components/DepartmentDoctor/DepartmentDoctor.js";
import Portal from "./Components/Portal/Portal.js";

function App() {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null);
  const [dept, setDept] = useState(null)
  const [doc, setDoc] = useState(null)


  useEffect(() =>{
    dispatch(fetchDepartments())
    .then(dispatch(fetchDoctors()))
  },[dispatch])

  const departments = useSelector(state => state.departments.entities)
  const doctors = useSelector(state => state.doctors.entities)

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
          </Routes>
        <About />
    </div>
  );
}

export default App;
