function countDigitsThatDivideNumber(num::Int64)
  numStrArr = num |> string |> (numStr -> split(numStr, ""))

  return filter(numChar -> num % parse(Int, numChar) === 0, numStrArr) |> length
end


using Test

Test.@testset "countDigitsThatDivideNumber" begin
  testArr = [7, 121, 1248]
  expectedArr = [1, 2, 4]
  testLen = length(testArr)

  for i in 1:testLen
    Test.@test countDigitsThatDivideNumber(testArr[i]) == expectedArr[i]
  end
end