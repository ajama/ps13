class Talk < ActiveRecord::Base
	attr_accessible :title, :speaker, :abstract, :track_number
	has_and_belongs_to_many :registrations
	def as_json(options = {})
		super(options.merge(:only => [ :title, :speaker, :abstract]))
	end
end
