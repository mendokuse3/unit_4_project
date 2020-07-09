class RenameTypeToClass < ActiveRecord::Migration[6.0]
  def change
    rename_column :bikes, :type, :class
  end
end
