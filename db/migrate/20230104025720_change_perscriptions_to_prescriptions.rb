class ChangePerscriptionsToPrescriptions < ActiveRecord::Migration[7.0]
  def change
    rename_table :perscriptions, :prescriptions
  end
end
