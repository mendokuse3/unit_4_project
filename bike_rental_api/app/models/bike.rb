class Bike < ApplicationRecord
    has_many :ledgers
    has_many :locations, through: :ledgers
end
