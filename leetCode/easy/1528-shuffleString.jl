function shuffleString(s::String, indices::Array{Int64,1})
  newStr = Array{String,1}(undef, length(s))

  for (idx, indice) in enumerate(indices)
    newStr[indice] = string(s[idx])
  end

  return join(newStr)
end

export shuffleString

using Test

Test.@testset "shuffleString" begin
  Test.@test shuffleString("codeleet", [5, 6, 7, 8, 1, 3, 2, 4]) == "leetcode"
  Test.@test shuffleString("abc", [1, 2, 3]) == "abc"
  Test.@test shuffleString("aiohn", [4, 2, 5, 3, 1]) == "nihao"
  Test.@test shuffleString("aaiougrt", [5, 1, 3, 7, 8, 4, 2, 6]) == "arigatou"
  Test.@test shuffleString("art", [2, 1, 3]) == "rat"
end