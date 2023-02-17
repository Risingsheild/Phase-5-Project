class Add < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :endDate, :string
  end

end
