class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :startDate, :endDate :title, :location, :notes, :doctor_id, :patient_id, :patient

  def patient
    object.patient.name
  end
  

end
