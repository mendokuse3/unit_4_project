class AddImageToBikeTable < ActiveRecord::Migration[6.0]
  def change
    add_column :bikes, :img, :string
  end
end
