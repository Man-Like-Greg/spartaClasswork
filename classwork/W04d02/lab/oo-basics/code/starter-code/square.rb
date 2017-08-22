class Square

	attr_accessor :length 

	def initialize(length)
		self.length = length
	end

	def calculate_area 
		self.length ** 2
	end

	def calculate_perimeter 
		self.length * 4
	end

	def scale_length(n)
		self.length *= n
		scaled_area = calculate_area 
		scaled_perimeter = calculate_perimeter
		puts "Area: #{scaled_area} Perimeter: #{scaled_perimeter}"
	end

	def describe
		puts "Area: #{calculate_area} Perimeter: #{calculate_perimeter}" 
	end
end