import { configureStore } from "@reduxjs/toolkit";

import departmentsReducer from "./TableSlices/departmentsSlice";
import doctorsReducer from "./TableSlices/doctorsSlice";
import patientsReducer from "./TableSlices/patientsSlice";
import appointmentsReducer from "./TableSlices/appointmentsSlice"
import prescriptionsReducer from "./TableSlices/prescriptionsSlice";


const store = configureStore ({
    reducer: {
        departments: departmentsReducer,
        doctors: doctorsReducer,
        patients: patientsReducer,
        appointments: appointmentsReducer,
        prescriptions: prescriptionsReducer
    }
})

export default store