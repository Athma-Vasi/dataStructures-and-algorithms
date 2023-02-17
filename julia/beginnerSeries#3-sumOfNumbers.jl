function getSum(a::Int64, b::Int64)::Int64
  sorted = sort([a, b])
  return sum(sorted[1]:sorted[2])
end