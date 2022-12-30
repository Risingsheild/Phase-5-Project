class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :title #(PharmD)
      t.string :name
      t.string :bio
      t.string :email
      t.string :password_digest
      t.boolean :doc

      t.references :department, null: false, foreign_key: true     

      t.timestamps
    end
  end
end
