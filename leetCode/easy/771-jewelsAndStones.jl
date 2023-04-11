function jewelsAndStones(jewels::String, stones::String)
  return filter(stone -> contains(jewels, stone), stones) |> length
end

export jewelsAndStones

using Test

Test.@testset "jewelsAndStones" begin
  Test.@test jewelsAndStones("aA", "aAAbbbb") == 3
  Test.@test jewelsAndStones("z", "ZZ") == 0
end