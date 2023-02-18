function positiveSum(arr::Array{Int})
  return length(arr) == 0 ? 0 : mapreduce(i -> i > 0 ? i : 0, +, arr)
end