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
    {city: 'Yeongdeungpo-gu', state: 'Seoul', country: 'South Korea', lat: 37.3281825, long: 126.9125374}
])

Bike.create([
    {name: 'Triumph Street Triple', year: 2019, img: 'https://images.unsplash.com/photo-1591259750353-31ae4a19d54d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', bike_class: 'Naked', price: 75, email: 'john@email.com'},
    {name: 'Ducati SuperSport S', year: 2015, img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', bike_class: 'SuperSport', price: 105, email: 'bob@email.com'},
    {name: 'Yamaha R6', year: 2009, img: 'https://images.unsplash.com/photo-1552155634-312b6355173b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1309&q=80', bike_class: 'Sport', price: 70, email: 'joe@email.com'},
    {name: 'BMW S1000RR', year: 2009, img: 'https://images.unsplash.com/photo-1572746965401-cb4df8f9fa79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80', bike_class: 'SuperSport', price: 90, email: 'alex@email.com'},
    {name: 'Yamaha MT09', year: 2013, img: 'https://images.unsplash.com/photo-1561023546-4e728fa9eaf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1254&q=80', bike_class: 'Naked', price: 55, email: 'gabe@email.com'},
    {name: 'Aprilia RSV1000r', year: 2004, img: 'https://images.unsplash.com/photo-1547729966-d80039abb615?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', bike_class: 'Sport', price: 85, email: 'ducatilex@email.com'},
    {name: 'Kawasaki ZX10R', year: 2014, img: 'https://images.unsplash.com/photo-1552085824-2af9e5fc3ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1791&q=80', bike_class: 'SuperSport', price: 80, email: 'kyle@email.com'},
    {name: 'Harley Davidson Sportster', year: 2017, img: 'https://images.unsplash.com/photo-1565073645024-3ef2dedfccc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', bike_class: 'Cafe Racer', price: 50, email: 'mike@email.com'},
])