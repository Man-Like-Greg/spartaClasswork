class PostsController < Sinatra::Base

	$posts = [{
		id: 0,
		title: "Post 1",
		content: "this is the first post"
	},
	{
		id: 1,
		title: "Post 2",
		content: "this is the second post"
	},
	{
		id: 2,
		title: "Post 3",
		content: "this is the third post"
	}]

	#sets root as the parent-dirctory of the current file
	set :root, File.join(File.dirname(__FILE__), "..")

	#sets the view directory correctly
	set :view, Proc.new{ File.join(root, "views") }

	configure :development do
		register Sinatra::Reloader
	end

	get "/" do 
		@title = "Blog Posts -----"

		@posts = $posts
		erb :"posts/index"
	end

	get "/new" do
		erb :"posts/new" 
	end
	#this task is showing the different id's
	get "/:id" do 
		parameter = params[:id].to_i

		@title = $posts[parameter]
		@body = $posts[parameter]
		@post = $posts[parameter]

		erb :"posts/show"
	end

	post "/" do 

		id = $posts.length
		
		new_post = {
			id: id,
			title: params[:title],
			content: params[:content]
		}

		$posts.push new_post
		redirect "/"
	end

	put "/:id" do
		"UPDATE #{params[:id]}"
	end

	delete "/:id" do
		"DELETE #{params[:id]}"
	end

	get "/:id/edit" do
		erb :"posts/edit"
		# "EDIT #{params[:id]}"
	end

end