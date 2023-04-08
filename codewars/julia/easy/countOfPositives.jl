function countPositivesSumNegatives(input::Array{Int,1})
  if length(input) == 0
    return []
  end

  countPositives = count(i -> i > 0, input)
  sumNegatives = mapreduce(i -> i < 0 ? i : 0, +, input)

  return [countPositives, sumNegatives]
end

println(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))