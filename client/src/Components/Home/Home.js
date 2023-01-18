import { MdLocalPharmacy, MdMedication } from "react-icons/md";
import './Home.css'

function Home() {
  return (
    <div className="information">
      <h1>
        <MdLocalPharmacy />
      </h1>
      <p>
        The Pharmacy at Flatiron has professional pharmacist to help with any of
        your urgent or non-urgent medication perscriptions.
      </p>
      <h1> <MdMedication /> </h1>
      <p> 
        With over 15 pharmacist in the Flatiron System you will always have available appts that are best suited with your schedule
      </p>
    </div>
  );
}

export default Home