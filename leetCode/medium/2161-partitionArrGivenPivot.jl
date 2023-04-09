function partitionArrGivenPivot(nums::Array{Int64,1}, pivot::Int64)
  lessThan::Array{Int64,1} = []
  equalTo::Array{Int64,1} = []
  greaterThan::Array{Int64,1} = []

  foreach(num -> (
      begin
        if num < pivot
          push!(lessThan, num)
        elseif num === pivot
          push!(equalTo, num)
        else
          push!(greaterThan, num)
        end
      end
    ), nums)

  collectedArr = [lessThan..., equalTo..., greaterThan...]
  return collectedArr
end

using Test

Test.@testset "partitionArrGivenPivot" begin
  Test.@test partitionArrGivenPivot([9, 12, 5, 10, 14, 3, 10], 10) == [9, 5, 3, 10, 10, 12, 14]
  Test.@test partitionArrGivenPivot([-3, 4, 3, 2], 2) == [-3, 2, 4, 3]
end