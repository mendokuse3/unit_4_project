class Location < ApplicationRecord
    has_many :ledgers
    has_many :bikes, through: :ledgers
end
