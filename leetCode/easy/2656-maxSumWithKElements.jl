function maxSumWithKElements(nums::Vector{Int64}, k::Int64)
  max = maximum(nums)
  maxSum = 0

  for _ in 1:k
    maxSum += max
    max += 1
  end

  return maxSum
end

export maxSumWithKElements

using Test

Test.@testset "maxSumWithKElements" begin
  nums = [1, 2, 3, 4, 5]
  k = 3
  Test.@test maxSumWithKElements(nums, k) == 18

  nums = [5, 5, 5]
  k = 2
  Test.@test maxSumWithKElements(nums, k) == 11
end