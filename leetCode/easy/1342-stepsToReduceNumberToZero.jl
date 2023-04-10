function stepsToReduceNumberToZero(num::Int64)
  steps = 0

  while num > 0
    num % 2 == 0 ? num /= 2 : num -= 1
    steps += 1
  end

  return steps
end

export stepsToReduceNumberToZero

using Test

Test.@testset "stepsToReduceNumberToZero" begin
  Test.@test stepsToReduceNumberToZero(14) == 6
  Test.@test stepsToReduceNumberToZero(8) == 4
  Test.@test stepsToReduceNumberToZero(123) == 12
end