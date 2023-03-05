import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "./DepartmentDoctor.css";

function DepartmentDoctor() {
  const [dept, setDept] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`/departments/${id}`)
      .then((r) => r.json())
      .then((data) => setDept(data));
  }, []);
  console.log(id);

  return (
    <div className="doctor-profile">
      <h1 className="dept-title"> {dept.name}</h1>
      <img src={dept.image} alt="img" className="image" />
      <div>
        <h1 style={{color: 'rgb(242, 194, 158)'}}> Department Doctors: </h1>
        <h3 className="doc-container">
          {dept.doctors
            ? dept.doctors.map((doc) => (
                <div className="doclist">
                  <li key={doc.id} className='docinfo'>
                    {`Dr. ${doc.name}, PharmD`} <br></br> {doc.bio} <p style={{fontStyle: 'italic', fontSize: '15px' }}>{doc.email}</p>
                  </li>
                </div>
              ))
            : null}
        </h3>
      </div>
    </div>
  );
}

export default DepartmentDoctor;
