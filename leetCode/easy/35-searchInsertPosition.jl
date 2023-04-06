
function searchInsertPosition(nums::Array{Int,1}, target::Int)::Int
  numsLen = length(nums)
  leftIdx = 1
  rightIdx = numsLen

  if target < first(nums)
    return 1
  end

  if target > last(nums)
    return numsLen + 1
  end

  while leftIdx < rightIdx
    midIdx = leftIdx + (div(rightIdx - leftIdx, 2) |> floor)
    mid = nums[midIdx]

    if target > mid
      leftIdx = midIdx + 1
    else
      rightIdx = midIdx
    end
  end

  return leftIdx
end

export searchInsertPosition

using Test

Test.@testset "searchInsertPosition" begin
  Test.@test searchInsertPosition([1, 3, 5, 6], 5) == 3
  Test.@test searchInsertPosition([1, 3, 5, 6], 2) == 2
  Test.@test searchInsertPosition([1, 3, 5, 6], 7) == 5
  Test.@test searchInsertPosition([1, 3, 5, 6], 0) == 1
  Test.@test searchInsertPosition([1], 0) == 1
  Test.@test searchInsertPosition([1], 1) == 1
  Test.@test searchInsertPosition([1], 2) == 2
  Test.@test searchInsertPosition([1, 3], 2) == 2
end

Test.@testset "nums: [1, 3], target: 2, expect: 2" begin
  Test.@test searchInsertPosition([1, 3], 2) == 2
end