import Portal from "../Portal/Portal";
import PatientCard from "./PatientsCard";
import './PortalPatients.css'

function PortalPatients({
  search,
  setSearch,
  patients,
  docAppointments,
  user,
}) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Portal user={user} />
      <div className="search">
        <label>
          Search for Patient:
          <input
            type="text"
            placeholder="patient name..."
            className="patientSearch"
            onChange={handleChange}
            value={search}
          />
        </label>
      </div>
      <br></br>
      <div className="appt-list">
        {patients.map((p) => {
          return (
            <PatientCard
              key={p.id}
              patient={p}
              docAppointments={docAppointments}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PortalPatients