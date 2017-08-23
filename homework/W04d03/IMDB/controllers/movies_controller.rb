class MoviesController < Sinatra::Base

	#setting the routes as the parent dirctory for the current file
	set :root, File.join(File.dirname(__FILE__), "..")

	#setting the view directory 
	set :view, Proc.new{ File.join(root, "views") }

	configure :development do 
		register Sinatra::Reloader
	end



end