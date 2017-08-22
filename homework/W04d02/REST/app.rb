require 'sinatra'
require 'sinatra/reloader' if development? 

get "/movies" do 
	"I'm Batman"
end