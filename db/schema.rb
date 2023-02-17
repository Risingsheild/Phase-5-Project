# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_17_040650) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.string "title"
    t.string "location"
    t.string "notes"
    t.bigint "patient_id", null: false
    t.bigint "doctor_id", null: false
    t.string "startDate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "endDate"
    t.index ["doctor_id"], name: "index_appointments_on_doctor_id"
    t.index ["patient_id"], name: "index_appointments_on_patient_id"
  end

  create_table "departments", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "doctors", force: :cascade do |t|
    t.string "title"
    t.string "name"
    t.string "bio"
    t.string "email"
    t.string "password_digest"
    t.boolean "doc"
    t.bigint "department_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["department_id"], name: "index_doctors_on_department_id"
  end

  create_table "patients", force: :cascade do |t|
    t.string "name"
    t.string "age"
    t.string "birthdate"
    t.string "email"
    t.string "password_digest"
    t.boolean "doc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prescriptions", force: :cascade do |t|
    t.integer "lisinopril"
    t.integer "amoxicillin"
    t.integer "atorvastatin"
    t.integer "hydrocodone"
    t.integer "albuterol"
    t.integer "metformin"
    t.integer "levothyroxine"
    t.integer "simvastatin"
    t.string "duration"
    t.bigint "patient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_prescriptions_on_patient_id"
  end

  add_foreign_key "appointments", "doctors"
  add_foreign_key "appointments", "patients"
  add_foreign_key "doctors", "departments"
  add_foreign_key "prescriptions", "patients"
end
