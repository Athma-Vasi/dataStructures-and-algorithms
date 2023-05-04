function sumMultiples(n::Int64)
  sum = 0

  for i in 1:n
    if i % 3 == 0 || i % 5 == 0 || i % 7 == 0
      sum += i
    end
  end

  return sum
end

export sumMultiples

using Test
Test.@testset "sumMultiples" begin
  Test.@test sumMultiples(7) == 21
  Test.@test sumMultiples(10) == 40
  Test.@test sumMultiples(9) == 30
  Test.@test sumMultiples(15) == 81
end