class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.string :title
      t.string :family_name
      t.string :given_name
      t.string :middle_name
      t.string :maiden_name
      t.string :sex
      t.string :blood_group
      t.string :date_of_birth
      t.string :street_address
      t.string :city
      t.integer :zip
      t.integer :phone1
      t.integer :phone2
      t.integer :mobile
      t.integer :fax
      t.string :email
      t.string :citizenship
      t.string :religion
      t.string :occupation
      t.string :employer
      t.string :contact_person
      t.string :contact_relation

      t.timestamps
    end
  end
end
