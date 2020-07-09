class Ledger < ApplicationRecord
  belongs_to :location
  belongs_to :bike
end
