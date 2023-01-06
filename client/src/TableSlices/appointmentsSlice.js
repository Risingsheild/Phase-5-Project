import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//getting all appointments
export const fetchAppointments = createAsyncThunk("appointments/fetchAppointments", () => {
    return fetch("/appointments")
        .then((r) => r.json())
        .then((data) => data)
})

//creating a new appointment
  export const createAppointment = createAsyncThunk(
    "appointments/createAppointment",
    async (newAppt) => {
      return fetch(`/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAppt),
      }).then((res) => res.json());
    }
  );


// updating appointments
export const updateAppointment = createAsyncThunk(
    "newAppointments/updateAppointments",
    async (appt) => {
      return fetch(`/appointments/${appt.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json'
        },
        body: JSON.stringify(appt),
      })
      .then((res) => res.json())
    }
  );

  //delete appointments
  export const deleteAppointment = createAsyncThunk(
    "appointment/deleteAppointment",
    async (apptId) => {
      fetch(`/appointments/${apptId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  );

  const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState: {
        entities: [],
        status: 'idle'
    },
    reducers: {
        onDeleteAppointment(state, action) {
            const index = state.entities.findIndex(a => a.id === action.payload)
            state.entities.splice(index, 1)
        },
        onUpdateAppointment(state, action) {
            state.entities = state.entities.map(appt => appt.id === action.payload.id ? {...appt, ...action.payload} : appt )
        }
    },

    extraReducers: {
        [fetchAppointments.pending](state){
            state.status = 'loading Appointments';
        },

        [fetchAppointments.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = 'idle';
          },

        [createAppointment.fulfilled](state, action){
            state.entities = [...state.entities, action.payload]
        },

        [updateAppointment.fulfilled](state, action) {
            state.entities.map(appt => appt.id === action.payload.id ? {...appt, ...action.payload} : appt)
        },

        [deleteAppointment.fulfilled](state, action){
            state.entities = state.entities.filter(
                (appt) => appt.id !== action.payload
            );
        },
    } 
  })

  export const {onDeleteAppointment, onUpdateAppointment} = appointmentsSlice.actions

  export default appointmentsSlice.reducer
