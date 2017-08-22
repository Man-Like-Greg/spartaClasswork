require 'sinatra'
require 'sinatra/reloader' if development? 

get "/movies" do 
	"I'm Batman"
end

get "/movies/new" do 
	"I'm faster than Flash"
end

post "/movies" do 
	"Hulk smash"
end

get "/movies/:id" do 
	"Superman returns"
end

get "/movies/:id/edit" do 
	"Team Avengers"
end

put "/movies/:id" do 
	"King greg is Ironman"
end

delete "/movies/:id" do 
	"Marvel over DC"
end 

post "/movies" do 
	"King Kong is the real King of the jungle"
end

get "/movies/:id" do 
	"saving private ryan"
end