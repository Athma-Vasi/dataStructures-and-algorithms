function finalValueAfterOperations(operations::Array{String,1})
  operationsTable = Dict{String,Int}([
    ("++X", 1), ("X++", 1), ("--X", -1), ("X--", -1)
  ])

  return reduce((result, oper) -> result + get(operationsTable, oper, 0), operations, init=0)
end

export finalValueAfterOperations

using Test

Test.@testset "finalValueAfterOperations" begin
  Test.@test finalValueAfterOperations(["--X", "X++", "X++"]) == 1
  Test.@test finalValueAfterOperations(["++X", "++X", "X++"]) == 3
  Test.@test finalValueAfterOperations(["X++", "++X", "--X", "X--"]) == 0
end