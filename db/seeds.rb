# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'seeding departments..'
Department.create(name: 'Oncology', image: 'https://www.boldbusiness.com/wp-content/uploads/2018/12/ONCOLOGY-TREATMENT_Featured.jpg')
Department.create(name: 'geriatrics', image: 'https://ih1.redbubble.net/image.2015617315.9555/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg')
Department.create(name: 'family', image: 'http://familypharmacygibraltar.com/templates/rt_zenith/custom/images/banners/FamilyPharmacy_Logo_sm.png')

puts 'now seeding doctors....'

Doctor.create(title: 'PharmD', name: 'Katie Meehan', bio: Faker::Quote.matz,
department_id: 3, email: 'katiemeehan@pharmacymed.edu', password:'123', doc: true) 

15.times do 
    Doctor.create(
        title: 'PharmD',
        name: Faker::Name.name,
        bio: Faker::Quote.most_interesting_man_in_the_world,
        department_id: rand(1..Department.all.size),
        email: "#{Faker::Internet.username}@pharmacymed.edu",
        password: Faker::Internet.password,
        doc: true
    )
end

puts 'Now seeding Patients...'
   
Patient.create(name: "Nick Wells", age: 25, email: "nick@gmail.com",
birthdate: Faker::Date.birthday(min_age: 18, max_age: 65),
password: "123", doc: false)

15.times do 
    Patient.create(
        name: Faker::Name.name,
        age: rand(18..65),
        birthdate: Faker::Date.birthday(min_age: 18, max_age: 65),
        email: Faker::Internet.free_email,
        password: Faker::Internet.password,
        doc: false
    )
end

puts 'now appointments...'

25.times do 
    Appointment.create(
        doctor_id: 1,
        patient_id: rand(1..Patient.all.size),
        title: Faker::Movie.title,
        location: Faker::Address.full_address,
        startDate: Faker::Time.forward(days: 28),
        notes: Faker::Cannabis.health_benefit

    )
end

puts 'now prescriptions..'
        Prescription.create(
        lisinopril: rand(1..3), 
        amoxicillin: rand(1..3), 
        atorvastatin: rand(1..3), 
        hydrocodone: rand(1..3),
        albuterol: rand(1..3), 
        metformin: rand(1..3), 
        levothyroxine: rand(1..3), 
        simvastatin: rand(1..3), 
        duration: "For #{ rand(1..6) } weeks", 
        patient_id: 1
        )

        10.times do 
            Prescription.create(
            lisinopril: rand(1..3), 
            amoxicillin: rand(1..3), 
            atorvastatin: rand(1..3), 
            hydrocodone: rand(1..3),
            albuterol: rand(1..3), 
            metformin: rand(1..3), 
            levothyroxine: rand(1..3), 
            simvastatin: rand(1..3), 
            duration: "For #{ rand(1..6) } weeks", 
            patient_id: rand(2..15)
            )
    end

    puts 'seeding done'

