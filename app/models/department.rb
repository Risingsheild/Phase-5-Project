class Department < ApplicationRecord
    has_many :doctors, dependent: :nullify

    # Oncology (cancer), geriatrics, family
end
