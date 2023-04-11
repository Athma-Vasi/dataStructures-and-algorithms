function numberOfGoodPairs(nums::Vector{Int})
  numsLen = length(nums)

  if numsLen <= 1
    return numsLen
  end

  goodPairs = 0

  for i in 1:numsLen
    for j in i+1:numsLen
      if nums[i] == nums[j]
        goodPairs += 1
      end
    end
  end

  return goodPairs
end

export numberOfGoodPairs

using Test

Test.@testset "numberOfGoodPairs" begin
  Test.@test numberOfGoodPairs([1, 2, 3, 1, 1, 3]) == 4
  Test.@test numberOfGoodPairs([1, 1, 1, 1]) == 6
  Test.@test numberOfGoodPairs([1, 2, 3]) == 0
end