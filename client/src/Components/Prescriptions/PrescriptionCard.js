import "./Prescriptions.css";

function PrescriptionsCard({ prescriptions }) {
  return (
    <div className="prescription-table">
      <table>
        <tr className="table-header">
          <th>Prescription Name</th>
          <th>Refills </th>
        </tr>
        <tr className="row">
          <td>Lisinopril</td>
          <td>{prescriptions.lisinopril}</td>
        </tr>
        <tr className="row">
          <td>Amoxicillin</td>
          <td>{prescriptions.amoxicillin}</td>
        </tr>
        <tr className="row">
          <td>Atorvastatin</td>
          <td>{prescriptions.atorvastatin}</td>
        </tr>
        <tr className="row">
          <td>Hydrocodone</td>
          <td>{prescriptions.hydrocodone}</td>
        </tr>
        <tr className="row">
          <td>Albuterol</td>
          <td>{prescriptions.metformin}</td>
        </tr>
        <tr className="row">
          <td>Metformin</td>
          <td>{prescriptions.metformin}</td>
        </tr>
        <tr className="row">
          <td>Levothyroxine</td>
          <td>{prescriptions.levothyroxine}</td>
        </tr>
        <tr className="row">
          <td>Simvastatin</td>
          <td>{prescriptions.simvastatin}</td>
        </tr>
        <h3>All Prescriptions should be taken {prescriptions.duration}</h3>
      </table>
    </div>
  );
}

export default PrescriptionsCard;
