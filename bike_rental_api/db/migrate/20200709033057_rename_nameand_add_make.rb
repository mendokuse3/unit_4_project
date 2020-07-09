class RenameNameandAddMake < ActiveRecord::Migration[6.0]
  def change
    rename_column :bikes, :name, :model
    add_column :bikes, :make, :string
  end
end
