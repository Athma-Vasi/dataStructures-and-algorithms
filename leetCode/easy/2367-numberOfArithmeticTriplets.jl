function numberOfArithmeticTriplets(nums::Vector{Int64}, diff::Int64)
  numSet = Set{Int64}(nums)

  return reduce((acc, curr) ->
      ((curr + diff) in numSet) && ((curr + (diff * 2)) in numSet) ? acc + 1 : acc
    , nums, init=0)
end

export numberOfArithmeticTriplets

using Test

Test.@testset "numberOfArithmeticTriplets" begin
  nums = [0, 1, 4, 6, 7, 10]
  diff = 3
  Test.@test numberOfArithmeticTriplets(nums, diff) == 2

  nums = [4, 5, 6, 7, 8, 9]
  diff = 2
  Test.@test numberOfArithmeticTriplets(nums, diff) == 2
end