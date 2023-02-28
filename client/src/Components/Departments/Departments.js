import { GiTumor, GiFamilyTree } from "react-icons/gi";
import { MdElderly } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./Departments.css";

function Departments({ departments }) {
  const navigate = useNavigate()

  return (
    <div className="the-departments">
      <h1>Our Departments:</h1>
      <div className="departments">
        <h3 className="dept" onClick={() => navigate(`/departments/${1}`)}>
          <GiTumor />
          Oncology Pharmacy
        </h3>
        <h3 className="dept" onClick={() => navigate(`/departments/${2}`)}>
          <MdElderly />
          Geriatrics Pharmacy
        </h3>
        <h3 className="dept" onClick={() => navigate(`/departments/${3}`)}>
          <GiFamilyTree />
          Family Pharmacy
        </h3>
      </div>
    </div>
  );
}

export default Departments;
