import Portal from "../Portal/Portal";
import ApptCard from "./ApptCard";
import './PortalAppts.css'

function PortalAppts({ patientAppts, user }) {
  return (
    <div className="appts">
      <Portal user={user} />
      <div className="appt-list">
        {patientAppts.map((appt) => {
          return <ApptCard key={appt.id} appt={appt} />;
        })}
      </div>
    </div>
  );
}

export default PortalAppts;
