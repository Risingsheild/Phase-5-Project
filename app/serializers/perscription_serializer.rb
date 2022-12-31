class PerscriptionSerializer < ActiveModel::Serializer
  attributes :id, :lisinopril, :amoxicillin, :atorvastatin, :hydrocodone,
  :albuterol, :metformin, :levothyroxine, :simvastatin, :duration, :patient_id
end
