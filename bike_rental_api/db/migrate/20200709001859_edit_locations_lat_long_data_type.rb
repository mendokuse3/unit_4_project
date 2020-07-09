class EditLocationsLatLongDataType < ActiveRecord::Migration[6.0]
  def change
      change_column :locations, :lat, :decimal
      change_column :locations, :long, :decimal
  end
end
