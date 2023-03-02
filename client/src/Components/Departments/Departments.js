import { GiTumor, GiFamilyTree } from "react-icons/gi";
import { MdElderly } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./Departments.css";

function Departments({departments}) {
  const navigate = useNavigate()


  return (
    <div className="the-departments">
      <h1>Our Departments:</h1>
      <div className="departments">
        <h3 className="dept" onClick={() => navigate(`/departments/${1}`)}>
          <GiTumor />
          {departments[0].name} Pharmacy
        </h3>
        <h3 className="dept" onClick={() => navigate(`/departments/${2}`)}>
          <MdElderly />
          {departments[1].name} Pharmacy
        </h3>
        <h3 className="dept" onClick={() => navigate(`/departments/${3}`)}>
          <GiFamilyTree />
          {departments[2].name} Pharmacy
        </h3>
      </div>
    </div>
  );
}

export default Departments;
