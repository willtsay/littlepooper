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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140619185815) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pets", force: true do |t|
    t.integer  "user_id"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "petname"
    t.integer  "flappy_high_score", default: 0
    t.integer  "total_points"
    t.integer  "pet_happiness"
    t.integer  "pet_strength"
    t.integer  "pet_nomnom"
    t.integer  "pet_xp"
    t.integer  "bugs_killed",       default: 0
    t.integer  "cloud_high_score",  default: 0
    t.integer  "cloud_total_score", default: 0
    t.integer  "bug_high_score",    default: 0
    t.integer  "bug_total_score",   default: 0
  end

end
