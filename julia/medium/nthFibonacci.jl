function nthFibonacci(num::Int)
  fibArr = [0, 1, 1]

  for i in 4:num
    push!(fibArr, fibArr[i-1] + fibArr[i-2])
  end

  return fibArr[num]
end

println(nthFibonacci(5))