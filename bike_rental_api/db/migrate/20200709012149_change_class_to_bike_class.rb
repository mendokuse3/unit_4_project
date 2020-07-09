class ChangeClassToBikeClass < ActiveRecord::Migration[6.0]
  def change
    rename_column :bikes, :class, :bike_class
  end
end
