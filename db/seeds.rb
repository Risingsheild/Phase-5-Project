# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

puts 'seeding departments..'
Department.create(name: 'Oncology', image: 'https://www.boldbusiness.com/wp-content/uploads/2018/12/ONCOLOGY-TREATMENT_Featured.jpg')
Department.create(name: 'geriatrics', image: 'https://ih1.redbubble.net/image.2015617315.9555/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg')
Department.create(name: 'family', image: 'http://familypharmacygibraltar.com/templates/rt_zenith/custom/images/banners/FamilyPharmacy_Logo_sm.png')

puts 'now seeding doctors....'

Doctor.create(title: 'PharmD' name: 'Katie Meehan', bio: Faker::Quote.matz,
department_id: 3, email: 'katiemeehan@pharmacymed.edu', password:'123', doc: true) 

15.times do 
    Doctor.create(
        title: 'PharmD'
        name: Faker::Name.name,
        bio: Faker::Quote.most_interesting_man_in_the_world,
        department_id: rand(1..Department.all.size),
        email: "#{Faker::Internet.username}@pharmacymed.edu",
        password: Faker::Internet.password,
        doc: true
    )
 
puts 'Now seeding Patients....'