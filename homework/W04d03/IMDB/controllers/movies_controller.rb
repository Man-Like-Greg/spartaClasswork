class MoviesController < Sinatra::Base

	#setting the routes as the parent dirctory for the current file
	set :root, File.join(File.dirname(__FILE__), "..")

	#setting the view directory 
	set :view, Proc.new{ File.join(root, "views") }

	#config to register with sinatra
	configure :development do 
		register Sinatra::Reloader
	end

	get "/" do
		"HOMEPAGE"
	end

	get "/new" do
		"NEW"
	end

	get "/:id" do
		"SHOW"
	end

	post "/" do 
		"CREATE"
	end

	get "/:id/edit" do
		"EDIT"
	end

	put "/:id" do 
		"UPDATE"
	end

	delete "/:id" do
		"DESTROY"
	end




end