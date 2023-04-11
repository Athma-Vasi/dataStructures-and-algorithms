function kidsWithLargestCandies(candies::Vector{Int}, extraCandies::Int)
  largestCandy = maximum(candies)
  return map(candy -> candy + extraCandies >= largestCandy, candies)
end

export kidsWithLargestCandies

using Test

Test.@testset "kidsWithLargestCandies" begin
  Test.@test kidsWithLargestCandies([2, 3, 5, 1, 3], 3) == [true, true, true, false, true]
  Test.@test kidsWithLargestCandies([4, 2, 1, 1, 2], 1) == [true, false, false, false, false]
  Test.@test kidsWithLargestCandies([12, 1, 12], 10) == [true, false, true]
end