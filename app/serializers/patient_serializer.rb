class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :birthdate, :all_appts, :doc

  def all_appts
    object.appointments.size
  end
end
