class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string: title
      t.string: location
      t.string: notes

      t.references :patient, null: false, foreign_key: true
      t.references :doctor, null: false, foreign_key: true
      
      t.string :startDate

      t.timestamps
    end
  end
end
