function runningSumOf1DArray(nums::Vector{Int})
  runningSum = 0
  return map(num -> runningSum += num, nums)
end

export runningSumOf1DArray

using Test

Test.@testset "runningSumOf1DArray" begin
  Test.@test runningSumOf1DArray([1, 2, 3, 4]) == [1, 3, 6, 10]
  Test.@test runningSumOf1DArray([1, 1, 1, 1, 1]) == [1, 2, 3, 4, 5]
  Test.@test runningSumOf1DArray([3, 1, 2, 10, 1]) == [3, 4, 6, 16, 17]
end