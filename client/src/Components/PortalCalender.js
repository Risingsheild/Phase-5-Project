import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createAppointment,
  updateAppointment,
  onUpdateAppointment,
  deleteAppointment,
  onDeleteAppointment,
} from "../TableSlices/appointmentsSlice";
import Portal from "./Portal/Portal";

import { Paper } from "@mui/material";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  MonthView,
  DayView,
  EditRecurrenceMenu,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";

function PortalCalender({ user, patientNames, docAppointments }) {
  const dispatch = useDispatch();
  const [month, setMonth] = useState("Month");
  const [date, setDate] = useState("2023-02-11");
  const [apptId, setApptId] = useState({});

  function changeAppointment(e) {
    if (e) {
      const key = Object.keys(e)[0];
      const value = Object.value(e)[0];
      setApptId((apptId) => ({ ...apptId, [key]: value }));
    }
  }

  function saveChange({ added, changed, deleted }) {
    if (changed) {
      const apptObj = { ...changed[apptId.id], ...apptId };
      dispatch(onUpdateAppointment(apptObj));
      dispatch(updateAppointment(apptObj));
    } else if (deleted) {
      dispatch(onDeleteAppointment(apptId.id));
      dispatch(deleteAppointment(apptId.id));
    } else {
      const apptObj = { ...added, ...{ doctor_id: user.id } };
      dispatch(createAppointment(apptObj));
    }
  }

  function TextEditor(props) {
    if (props.type === "multilineTextEditor") {
      return null;
    } else {
      return <AppointmentForm.TextEditor {...props} />;
    }
  }

  function BasicLayout({ onChange, appointmentData, ...props }) {
    function onPatientChange(e) {
      onChange({ patient_id: e });
    }
    function onNoteChange(e) {
      onChange({ notes: e });
    }

    return (
      <AppointmentForm.BasicLayout
        appointmentData={appointmentData}
        onChange={onChange}
        {...props}
      >
        <AppointmentForm.Label text="Patient" type="title" />

        <AppointmentForm.Select
          value={appointmentData.patient_id}
          onValueChange={onPatientChange}
          availableOptions={patientNames}
          selectOption="text"
          type="filled"
        />
        <AppointmentForm.Label text="Notes" type="title" />

        <AppointmentForm.TextEditor
          value={appointmentData.notes}
          onValueChange={onNoteChange}
          placeholder="notes"
        />
      </AppointmentForm.BasicLayout>
    );
  }
  return (
    <div>
      <Portal user={user} />
        <Paper>
          <Scheduler data={docAppointments} height={700} startDate={"string"}>
            <ViewState
              currentDate={date}
              onCurrentDateChange={(date) => setDate(date)}
              currentViewName={month}
              onCurrentViewNameChange={(month) => setMonth(month)}
            />
            <EditingState
              onCommitChanges={saveChange}
              onEditingAppointmentChange={changeAppointment}
            />
            <WeekView startDayHour={7} endDayHour={24} />
            <MonthView />
            <DayView />
            <EditRecurrenceMenu />
            <ConfirmationDialog />
            <Toolbar />
            <DateNavigator />
            <ViewSwitcher />
            <Appointments />
            <AppointmentTooltip showOpenButton />

            <AppointmentForm
              basicLayoutComponent={BasicLayout}
              textEditorComponent={TextEditor}
            />
          </Scheduler>
        </Paper>
    </div>
  );
}

export default PortalCalender;
