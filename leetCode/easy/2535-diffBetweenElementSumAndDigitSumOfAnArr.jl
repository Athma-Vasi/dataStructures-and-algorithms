function diffBetweenElementSumAndDigitSumOfAnArr(nums::Array{Int64,1})
  elementSum = reduce(+, nums)
  digitSum = mapreduce(num -> (
      begin
        numStrArr = num |> string |> (numStr -> split(numStr, ""))
        return mapreduce(numStr -> parse(Int, numStr), +, numStrArr)
      end
    ), +, nums)

  return abs(elementSum - digitSum)
end

using Test

Test.@testset "diffBetweenElementSumAndDigitSumOfAnArr" begin
  Test.@test diffBetweenElementSumAndDigitSumOfAnArr([1, 15, 6, 3]) == 9
  Test.@test diffBetweenElementSumAndDigitSumOfAnArr([1, 2, 3, 4]) == 0
  Test.@test diffBetweenElementSumAndDigitSumOfAnArr([1, 2, 3, 4, 5, 6]) == 0
end