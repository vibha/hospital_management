class Patient < ActiveRecord::Base
  
  validates :title, :presence => true
  validates :family_name, :presence => true
  validates :given_name, :presence => true
  validates :date_of_birth, :presence => true
  
 # attr_accessible :date_of_birth
  
end
