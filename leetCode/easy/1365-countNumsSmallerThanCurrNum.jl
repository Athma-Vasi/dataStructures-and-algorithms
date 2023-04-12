function countNumsSmallerThanCurrNum(nums::Vector{Int})
  result::Vector{Int} = []

  for (i, iVal) in enumerate(nums)
    count = 0
    for (j, jVal) in enumerate(nums)
      if jVal < iVal
        count += 1
      end
    end

    push!(result, count)
  end

  return result
end

export countNumsSmallerThanCurrNum

using Test

Test.@testset "countNumsSmallerThanCurrNum" begin
  Test.@test countNumsSmallerThanCurrNum([8, 1, 2, 2, 3]) == [4, 0, 1, 1, 3]
  Test.@test countNumsSmallerThanCurrNum([6, 5, 4, 8]) == [2, 1, 0, 3]
  Test.@test countNumsSmallerThanCurrNum([7, 7, 7, 7]) == [0, 0, 0, 0]
end