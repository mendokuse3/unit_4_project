class AddYearToBikeTable < ActiveRecord::Migration[6.0]
  def change
    add_column :bikes, :year, :string
  end
end
