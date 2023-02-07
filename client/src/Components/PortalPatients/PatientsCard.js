import { useState } from "react";
import './PortalPatients.css'

function PatientCard({ patient, docAppointments }) {
  const [expand, setExpand] = useState(false);

  function handleClick() {
    setExpand(!expand);
  }

  return (
    <div className="patient">
      <div className="container">
        <button
          className={expand ? "bttn-clicked" : "bttn"}
          onClick={handleClick}
        >
          {patient.name} ({patient.total_appts})
          <span className={expand ? "hamburger cross" : "hamburger"}>
            <span className="line line--top"></span>
            <span className="line line--middle"></span>
            <span className="line line--bottom"></span>
          </span>
        </button>
      </div>
      <div className="collapsible">
        {docAppointments.map((appt) => {
          if (appt.patient_id === patient.id) {
            return (
              <ul key={appt.id} className={expand ? "expanded" : "collapsed"}>
                <h3>
                  {appt.startDate.split("-")[1]}/ 
                  {appt.startDate.split("-")[2].split("T")[0]}
                </h3>
                <li>{appt.title}</li>
                <li>Room: {appt.location}</li>
                <li>Notes: {appt.notes}</li>
              </ul>
            );
          }
        })}
      </div>
    </div>
  );
}

export default PatientCard;
