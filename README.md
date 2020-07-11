# Ruby's Rentals for Riders - a Motorcycle Rental App

## Concept

A working full-stack application using Ruby on Rails and React that allows users to search view available motorcycles to rent at each of our designated locations, as well as to put up their own bikes to be rented.

## Technologies Used

- HTML
- CSS
- JavaScript
- Ruby
- Rails
- React

## Wireframe

<img src="https://github.com/mendokuse3/unit_4_project/blob/master/images/wireframe.png" alt text="wire frame">

## User Stories

As a user, I want to be able to…

- check out a location and see the bikes available at that location
- check out the bikes and look at a specific bike to see more information about it
- put up my own bike to be rented by filling out a form
- edit and remove my bike

## Challenges

- Due to the nature of the many to many relationship and join tables, I initially thought I would be able to simply nest my post route so that i was '/locations/location_id/bikes', but instead found that it had the same functionality as a just posting to bikes.  In order to work around this, I had to make a second fetch request after to the join table and create a new ledger.
- In order to delete a bike, I ran into an issue where I was unable to delete the bike due to the existence of the corresponding ledger, so I had to first delete the ledger using a fetch to first find it, then another to delete the ledger, and then a third to delete the bike.

## What We Would Like To Revisit

- I would love to add user authentication so that each bike is associated to a user, which would prevent users from editing and deleting other users' bikes.
- I had initially planned on using the google maps api to include a map of the location of each "store", but ran out of time to do so and would love to go back and add that in.


