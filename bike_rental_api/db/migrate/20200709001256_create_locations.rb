class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :city
      t.string :state
      t.string :country
      t.integer :lat
      t.integer :long

      t.timestamps
    end
  end
end
