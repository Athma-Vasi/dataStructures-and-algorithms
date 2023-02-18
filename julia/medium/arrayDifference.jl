

function arrayDiff(a::Array{Int64,1}, b::Array{Int64,1})
  return filter(x -> x ∉ b, a)
end

println(arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3])
