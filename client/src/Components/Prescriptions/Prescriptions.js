import Portal from "../Portal/Portal";
import PrescriptionsCard from "./PrescriptionCard";
import "./Prescriptions.css";

function Prescriptions({ user, prescriptions }) {
  const myPrescriptions = prescriptions
    .filter((p) => p.patient_id === user.id)
    .map((p) => {
      return <PrescriptionsCard key={p.id} prescriptions={p} />;
    });

  return (
    <div className="presciptions-list">
      <div>
        <Portal user={user} />
      </div>
      {myPrescriptions}
    </div>
  );
}

export default Prescriptions;
