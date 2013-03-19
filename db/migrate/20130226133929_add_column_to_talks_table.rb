class AddColumnToTalksTable < ActiveRecord::Migration
  def change
  	#change_table :talks do |t|
  		add_column :talks, :track_number, :integer
  	#end
  end
end
