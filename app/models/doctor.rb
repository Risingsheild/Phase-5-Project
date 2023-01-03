class Doctor < ApplicationRecord
    has_secure_password

    belongs_to :department
    has_many :appointments, dependent: :nullify
    has_many :patients, through: :appointments

    validates :email, presence: true, uniqueness: true
    validates :name, presence: true
    validate :required_email

    def required_email
        unless email.match?(/pharmacymed.edu/)
            errors.add(:permitted_emails, ": Must have a Pharmacy Med email.")
        end
    end

end
