function countByX(num::Int, multiple::Int)
  count = num
  resultArr::Array{Int,1} = []

  while multiple > 0
    push!(resultArr, count)
    count += num
    multiple -= 1
  end

  return resultArr
end

println(countByX(1, 5)) # [1, 2, 3, 4, 5]
println(countByX(2, 5)) # [2, 4, 6, 8, 10]