# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Location.create([
    {city: 'Los Angeles', state: 'California', country: 'United States', lat: 34.0475331, long: -118.250197},
    {city: 'San Francisco', state: 'California', country: 'United States', lat: 37.7411927, long: -122.4564423},
    {city: 'Ajina', state: 'Hiroshima', country: 'Japan', lat: 34.3070042, long: 132.3903645},
    {city: 'Yeongdeungpo-gu', state: 'Seoul', country: 'South Korea', lat: 37.3281825, long: 126.9125374,13.81}
])

Bike.create([
    {name: 'Triumph Street Triple', year: 2019, img: 'https://images.unsplash.com/photo-1591259750353-31ae4a19d54d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', type: 'Naked', price: 75, email: 'john@email.com'}
])