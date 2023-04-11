function buildArrFromPermutation(nums::Array{Int64,1})
  result::Array{Int64,1} = []

  foreach(num -> push!(result, nums[num]), nums)

  return result
end

export buildArrFromPermutation

