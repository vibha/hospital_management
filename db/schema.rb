# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120220043822) do

  create_table "patients", :force => true do |t|
    t.string   "title"
    t.string   "family_name"
    t.string   "given_name"
    t.string   "middle_name"
    t.string   "maiden_name"
    t.string   "sex"
    t.string   "blood_group"
    t.datetime "date_of_birth"
    t.string   "street_address"
    t.string   "city"
    t.integer  "zip"
    t.integer  "phone1"
    t.integer  "phone2"
    t.integer  "mobile"
    t.integer  "fax"
    t.string   "email"
    t.string   "citizenship"
    t.string   "religion"
    t.string   "occupation"
    t.string   "employer"
    t.string   "contact_person"
    t.string   "contact_relation"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
