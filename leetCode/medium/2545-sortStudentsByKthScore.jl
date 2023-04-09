function sortStudentsByKthScore(score, k::Int64)
  return sort(score, rev=true, by=x -> x[k])
end

using Test

Test.@testset "sortStudentsByKthScore: k=1" begin
  score = [[1, 2, 3], [3, 2, 1], [2, 1, 3]]
  Test.@test sortStudentsByKthScore(score, 1) == [[3, 2, 1], [2, 1, 3], [1, 2, 3]]
end

