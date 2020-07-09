class CreateBikes < ActiveRecord::Migration[6.0]
  def change
    create_table :bikes do |t|
      t.string :name
      t.string :type
      t.decimal :price, precision: 8, scale: 2
      t.string :email

      t.timestamps
    end
  end
end
