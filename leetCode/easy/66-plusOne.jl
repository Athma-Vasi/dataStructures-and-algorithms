function plusOne(nums::Array{Int64,1})::Array{Int64,1}
  numsLen = length(nums)
  numsClone = deepcopy(nums)

  for i in reverse(1:numsLen)
    if numsClone[i] === 9
      numsClone[i] = 0
    else
      numsClone[i] += 1
      return numsClone
    end
  end

  return prepend!(numsClone, 1)
end

export plusOne

using Test

Test.@testset "plusOne" begin
  Test.@test plusOne([1, 2, 3]) == [1, 2, 4]
  Test.@test plusOne([4, 3, 2, 1]) == [4, 3, 2, 2]
  Test.@test plusOne([0]) == [1]
  Test.@test plusOne([9]) == [1, 0]
  Test.@test plusOne([9, 9]) == [1, 0, 0]
  Test.@test plusOne([9, 9, 9]) == [1, 0, 0, 0]
  Test.@test plusOne([9, 9, 9, 9]) == [1, 0, 0, 0, 0]
  Test.@test plusOne([9, 9, 9, 9, 9]) == [1, 0, 0, 0, 0, 0]
  Test.@test plusOne([9, 9, 9, 9, 9, 9]) == [1, 0, 0, 0, 0, 0, 0]
  Test.@test plusOne([9, 9, 9, 9, 9, 9, 9]) == [1, 0, 0, 0, 0, 0, 0, 0]
  Test.@test plusOne([9, 9, 9, 9, 9, 9, 9, 9]) == [1, 0, 0, 0, 0, 0, 0, 0, 0]
  Test.@test plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9]) == [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  Test.@test plusOne([9, 8, 7, 6, 5, 4, 3, 2, 1, 9]) == [9, 8, 7, 6, 5, 4, 3, 2, 2, 0]
end
