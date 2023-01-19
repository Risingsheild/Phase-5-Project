import { GiTumor, GiFamilyTree } from "react-icons/gi";
import { MdElderly } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./Departments.css";

function Departments({ departments, setDept }) {
  const navigate = useNavigate;

  function handleDeptClick(dept) {
    setDept(departments.filter((d) => d.id === dept.id));
    navigate(`/departments/${dept.id}`);
  }

  return (
    <div className="the-departments">
      <h1>Our Departments:</h1>
      <div className="departments">
        <h3 className="dept" onClick={handleDeptClick(departments[0])}>
          <GiTumor />
          {departments[0].name}
        </h3>
        <h3 className="dept" onClick={handleDeptClick(departments[1])}>
          <MdElderly />
          {departments[1].name}
        </h3>
        <h3 className="dept" onClick={handleDeptClick(departments[2])}>
          <GiFamilyTree />
          {departments[2].name}
        </h3>
      </div>
    </div>
  );
}

export default Departments;
