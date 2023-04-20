function rearrangeArrayElementsBySign(nums::Array{Int64,1})
  posNums::Array{Int64,1} = []
  negNums::Array{Int64,1} = []

  foreach(num ->
      num > 0 ? push!(posNums, num) : num < 0 ? push!(negNums, num) : push!(posNums, num), nums)

  posLen = length(posNums)
  negLen = length(negNums)

  posIdx = 1
  negIdx = 1
  numsIdx = 1

  while posIdx <= posLen && negIdx <= negLen
    nums[numsIdx] = posNums[posIdx]
    numsIdx += 1
    nums[numsIdx] = negNums[negIdx]
    numsIdx += 1
    posIdx += 1
    negIdx += 1
  end

  return nums
end

println(rearrangeArrayElementsBySign([3, 1, -2, -5, 2, -4]))