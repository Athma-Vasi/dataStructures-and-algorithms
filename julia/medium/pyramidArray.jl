function pyramidArray(num::Int)
  arr::Array{Array{Int64,1}} = []

  for i in 1:num
    push!(arr, fill(1, i))
  end

  return arr
end

println(pyramidArray(0))
println(pyramidArray(1))
println(pyramidArray(2))
println(pyramidArray(3))