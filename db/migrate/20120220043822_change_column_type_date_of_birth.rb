class ChangeColumnTypeDateOfBirth < ActiveRecord::Migration
  def up
    change_table :patients do |t|
      t.change :date_of_birth, :datetime
    end
  end

  def down
    change_table :patients do |t|
      t.change :date_of_birth, :string
    end
  end
end
