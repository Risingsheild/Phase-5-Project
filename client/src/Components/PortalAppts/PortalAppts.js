import Portal from "../Portal/Portal";

function PortalAppts({ patientAppts, user }) {
  return (
    <div className="appts">
      <Portal user={user} />
      <div className="appt-list">
        {patientAppts.map((appt) => {
          return <li> {appt} </li>;
        })}
      </div>
    </div>
  );
}

export default PortalAppts;
