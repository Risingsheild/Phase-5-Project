import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


function DepartmentDoctor() {

  const [dept, setDept] = useState([])
  
  const navigate = useNavigate;
  const {id} = useParams()


useEffect(() => { 
  fetch(`/departments/${id}`)
  .then((r) => r.json())
  .then((data) => setDept(data))
 

},[])
   console.log(id);


return (
    <div className="doctor-profile">
      <h1 className="dept-title"> {dept.name}</h1>
      <img src={dept.image} alt="img" className="image" />
      <div className="doc-list">
        <h1> Department Doctors: </h1>
  <h3>
        {dept.doctors
          ? dept.doctors.map((doc) => (
              <li
                key={doc.id}
                onClick={() => navigate(`/doctors/${doc.id}`)}
              >{`Dr. ${doc.name}, PharmD`}</li>
            ))
          : null}
        </h3>
      </div>
    </div>
  );
}

export default DepartmentDoctor
