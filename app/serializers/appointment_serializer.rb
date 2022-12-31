class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :startDate, :title, :location, :notes, :doctor_id, :patient_id, :patient

  def patient
    object.patient.name
  end
  

end
