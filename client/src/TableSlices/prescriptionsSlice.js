import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPrescriptions = createAsyncThunk("prescriptions/fetchPrescriptions", () => {
    return fetch("/prescriptions")
        .then((r) => r.json())
        .then((data) => data)
});

const PrescriptionsSlicer = createSlice({
    name: 'prescriptions',
    initialState: {
        entities: [],
        status: 'idle'
    },
    
    reducers: {

    },

    extraReducers: {
        [fetchPrescriptions.pending](state) {
            state.status = 'Prescriptions Loading';
        },

        [fetchPrescriptions.fulfilled](state, action){
            state.entities = action.payload;
            state.status = 'idle'
        }
    }
})

export default PrescriptionsSlicer.reducer