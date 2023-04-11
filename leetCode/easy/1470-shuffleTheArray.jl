function shuffleTheArray(nums::Array{Int,1}, n::Int)
  leftSlice = nums[1:n]
  rightSlice = nums[n+1:end]

  resultArr::Array{Int,1} = []

  for (idx, val) in enumerate(leftSlice)
    push!(resultArr, val)
    push!(resultArr, rightSlice[idx])
  end

  return resultArr
end

export shuffleTheArray

using Test

Test.@testset "shuffleTheArray" begin
  Test.@test shuffleTheArray([2, 5, 1, 3, 4, 7], 3) == [2, 3, 5, 4, 1, 7]
  Test.@test shuffleTheArray([1, 2, 3, 4, 4, 3, 2, 1], 4) == [1, 4, 2, 3, 3, 2, 4, 1]
  Test.@test shuffleTheArray([1, 1, 2, 2], 2) == [1, 2, 1, 2]
end
