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


export rearrangeArrayElementsBySign

using Test

Test.@testset "rearrangeArrayElementsBySign" begin
  nums = [3, 1, -2, -5, 2, -4]
  result = [3, -2, 1, -5, 2, -4]
  Test.@test rearrangeArrayElementsBySign(nums) == result

  nums = [-1, 1]
  result = [1, -1]
  Test.@test rearrangeArrayElementsBySign(nums) == result
end

