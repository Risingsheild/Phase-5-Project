# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'seeding departments..'
Department.create(name: 'Oncology', image: 'https://www.boldbusiness.com/wp-content/uploads/2018/12/ONCOLOGY-TREATMENT_Featured.jpg')
Department.create(name: 'Geriatrics', image: 'https://c8.alamy.com/comp/2AP62GH/pharmacy-concept-icon-geriatric-patient-treatment-idea-thin-line-illustration-elderly-diseases-medication-therapy-healthcare-for-seniors-vector-is-2AP62GH.jpg')
Department.create(name: 'Family', image: 'http://familypharmacygibraltar.com/templates/rt_zenith/custom/images/banners/FamilyPharmacy_Logo_sm.png')

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
        birthdate: Faker::Date.birthday(min_age: 18, max_age: 85),
        email: Faker::Internet.free_email,
        password: Faker::Internet.password,
        doc: false
    )
end

puts 'now appointments...'
3.times do
    Appointment.create(
      doctor_id: 1,
      patient_id: 1,
      title: Faker::Movie.title,
      location: Faker::Address.full_address,
      startDate: DateTime.new(2023,3,rand(1..30),rand(1..19),rand(1.60)),
      endDate: DateTime.new(2023,3,rand(1..30),rand(6..19),rand(1.60)),
      notes: Faker::Cannabis.health_benefit
    )
  end
        10.times do
            Appointment.create(
              doctor_id: 1,
              patient_id: rand(2..Patient.all.size),
              title: Faker::Movie.title,
              location: Faker::Address.full_address,
              startDate: DateTime.new(2023,3,rand(1..30),rand(1..19),rand(1.60)),
              endDate: DateTime.new(2023,3,rand(1..30),rand(6..19),rand(1.60)),
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

    puts 'seeding done'

