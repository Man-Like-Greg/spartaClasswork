# user to choose which calculater to use
puts "which calculator they want to use? (b)asic or (a)dvanced or BMI"
user_input = gets.chomp

# # if a basic calculator is chosen
puts "basic calculator" if user_input == "b"
# # if a advanced calculator is chosen
puts "advanced calculator" if user_input == "a" 
# print ">>"
puts "BMI Calculator" if user_input == "BMI" 

user_input = gets.chomp.split(" ") #the split turns it into colums 
# puts user_input.class
num1 = user_input[0].to_i
operator = user_input[1].to_sym
num2 = user_input[2].to_i

# puts  "#{num1} #{operator} #{num2}" # display in-line
# # set up a basic result case
b_result = case 
	when :+ then num1 + num2
	when :- then num1 - num2
	when :* then num1 * num2
	when :/ then num1 / num2
	when :% then num1 % num2
	else nil
end
puts ">> #{b_result}"

# set up a advanced result case
a_result = case 
	when :** then num1 ** num2
	when :sqrt then Math.sqrt(num1)
	else nil
end
puts ">> #{a_result}"

def BMI
	user_input = get.chomp.split(" ")
	height = user_input[0]
	weight = user_input[1]

	bmi = (weight/(height ** 2))
end

def bmi_result bmi

	if bmi < 16 then 
		"Your thin"
	elsif bmi > 17 && bmi < 18.5 then 
		"Your underweight"
	elsif  bmi > 18.5 && bmi < 25 then 
		"You are normal"
	elsif bmi > 25 && bmi < 30 then 
		"You are Overweight"
	else	puts "obese"
	end 
end

