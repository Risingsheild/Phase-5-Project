import { useState } from "react";
import './PortalAppts.css'

function ApptCard({ appt }) {
  const [expand, setExpand] = useState(false);

  function handleClick() {
    setExpand(!expand);
  }

  return (
    <div className="appt">
      <div className="container">
        <button
          className={expand ? "bttn-clicked" : "bttn"}
          onClick={handleClick}
        >
          Appt is on 
          <br></br>
          {appt.startDate.split("-")[1]}/
          {appt.startDate.split("-")[2]}
          <br></br> {appt.title}
          <span className={expand ? "hamburger cross" : "hamburger"}>
            <span className="line line--top"></span>
            <span className="line line--middle"></span>
            <span className="line line--bottom"></span>
          </span>
        </button>
      </div>
      <div className="collapsible">
        <ul key={appt.id} className={expand ? "expanded" : "collapsed"}>
          <li>Location: {appt.location} </li>
          <li>Notes: {appt.notes}</li>
        </ul>
      </div>
    </div>
  );
}

export default ApptCard