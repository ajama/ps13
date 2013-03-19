class TalksController < ApplicationController
	
	respond_to :json, :html

	def index
  		respond_with(@talks = Talk.all)
  	end

  	def show
  		respond_with(@talks = Talk.all) 
  	end 

end