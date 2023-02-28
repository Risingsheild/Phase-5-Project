import { useNavigate } from "react-router-dom";

function DepartmentDoctor({ dept, setDoc, doctors }) {
  const navigate = useNavigate;

  function handleClick(id) {
    setDoc(doctors.filter((d) => d.id === id));
    navigate(`/doctors/${id}`);
  }
  return (
    <div className="doctor-profile">
      <h1 className="dept-title"> {dept.name}</h1>
      <img src={dept[0].image} alt="img" className="image" />
      <div className="doc-list">
        <h3> Department Doctors: </h3>

        {dept[0].doctors
          ? dept[0].doctors.map((doc) => (
              <li
                key={doc.id}
                onClick={() => handleClick(doc.id)}
              >{`Dr. ${doc.name}, PharmD`}</li>
            ))
          : null}
      </div>
    </div>
  );
}

export default DepartmentDoctor
