function subtractProductAndSumOfInteger(n::Int)
  nArr = string(n) |> (n -> split(n, "")) |> (n -> map(x -> parse(Int, x), n))
  return reduce(*, nArr) - reduce(+, nArr)
end

export subtractProductAndSumOfInteger

using Test

Test.@testset "subtractProductAndSumOfInteger" begin
  Test.@test subtractProductAndSumOfInteger(234) == 15
  Test.@test subtractProductAndSumOfInteger(4421) == 21
end