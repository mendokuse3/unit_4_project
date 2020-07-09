class Ledger < ApplicationRecord
  belongs_to :location
  belongs_to :bike

  validates_uniqueness_of :bike_id, scope: :location_id
  validates_uniqueness_of :location_id, scope: :bike_id
end
