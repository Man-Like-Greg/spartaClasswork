require 'sinatra'
require 'sinatra/reloader' if development? 

# creating a root server when we enter / it will return hello worl
	get "/" do 
		"Hello GEZZER, How you today??! Joe,,,, you da man"
	end

