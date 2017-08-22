require_relative 'person.rb'
greg = Person.new("Greg", "male", 25, 1.70, 75)

# greg.name = "King Greg"
# greg.sex = "male"
# greg.age = 25
# greg.height = 1.70
# greg.weight = 75

# bmi = calculate_bmi(greg.height, greg.weight)

# def calculate_bmi height,weight
#   (weight / (height  ** 2)).to_i
# end

# def calculate_calories sex, height, weight, age
#   if sex == "Male"
#     bmr = 66.47 + (13.7 * weight) + (5 * height * 100) - (6.8 * age)
#   else
#     bmr = 655.1 + (9.6 * weight) + (1.8 * height * 100) - (4.7 * age)
#   end

#   bmr.to_i
# end

# puts greg.calculate_bmi
# puts greg.calculate_calories
# puts calculate_bmi(greg.height, greg.weight) 
puts greg.describe

# # this is a hash
# greg = {
# 	name: "greg",
# 	sex: "male"
# }
# # this is how to call the name from the hash
# greg[name] 

# Person one
# person_one_name = "Bob";
# person_one_sex = "Male";
# person_one_age = 50;
# person_one_height = 1.86;
# person_one_weight = 85;

# # calculate BMI
# person_one_bmi = calculate_bmi person_one_height, person_one_weight

# # calculate required calories
# person_one_calories = calculate_calories(person_one_sex, person_one_height, person_one_weight, person_one_age)

# puts "#{person_one_name} has a BMI of #{person_one_bmi}. Recommend calorie intake is #{person_one_calories} calories"
