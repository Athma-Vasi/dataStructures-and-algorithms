function createPhoneNumber(numbers::Array{Int64,1})
  return "(" * join(numbers[1:3]) * ")" * " " * join(numbers[4:6]) * "-" * join(numbers[7:10])
end