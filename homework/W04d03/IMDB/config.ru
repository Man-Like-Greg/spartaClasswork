require "sinatra"
require "sinatra/reloader" if development?
require_relative "./controllers/movies_controller.rb"

run MoviesController