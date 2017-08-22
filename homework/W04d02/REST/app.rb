require 'sinatra'
require 'sinatra/reloader' if development? 

get "/movies" do 
	"I'm Batman"
end

get "/movies/new" do 
	"I'm faster than Flash"
end