class CreatePerscriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :perscriptions do |t|
      t.integer :lisinopril
      t.integer :amoxicillin
      t.integer :atorvastatin
      t.integer :hydrocodone
      t.integer :albuterol
      t.integer :metformin
      t.integer :levothyroxine
      t.integer :simvastatin

      t.string :duration

      t.references :patient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
