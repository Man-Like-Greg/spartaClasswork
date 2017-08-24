class MoviesController < Sinatra::Base


	$movie_posts =[
		id: 0,
		title: "Movie name",
		content: "Review",
		rate: "Movie rating",
		movie_link: "YouTube trailer link"
	]

	#setting the routes as the parent dirctory for the current file
	set :root, File.join(File.dirname(__FILE__), "..")

	#setting the view directory 
	set :view, Proc.new{ File.join(root, "views") }

	#config to register with sinatra
	configure :development do 
		register Sinatra::Reloader
	end
	#INDEX
	get "/" do
		@movie_posts = $movie_posts
		erb :"movie_posts/index"
	end
	#NEW
	get "/new" do
		erb :"movie_posts/new"
	end
	#SHOW
	get "/:id" do
		parameter = params[:id].to_i

		@title = $movie_posts[parameter]
		@body = $movie_posts[parameter]
		@movie_posts = $movie_posts[parameter]

		erb :"movie_posts/show"
	end
	#CREATE
	post "/" do 
		id = $movie_posts.length
		new_movieReview = {
			id: id,
			title: params[:title],
			content: params[:content],
			rate: params[:rate],
			movie_link: params[:movie_link]
		}

		$movie_posts.push new_movieReview
		redirect "/"
	end
	#EDIT
	get "/:id/edit" do
		erb :"movie_posts/edit"
	end
	#UPDATE
	put "/:id" do 
		"UPDATE (will be covered in next lesson)"
	end
	#DELETE
	delete "/:id" do
		"DESTROY (will be covered in next lesson)"
	end

end