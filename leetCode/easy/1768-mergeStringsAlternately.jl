
function mergeStringsAlternately(word1::String, word2::String)
  len1 = length(word1)
  len2 = length(word2)

  idx1 = 1
  idx2 = 1
  result = ""

  while idx1 <= len1 && idx2 <= len2
    result *= word1[idx1]
    result *= word2[idx2]

    idx1 += 1
    idx2 += 1
  end

  len1 < len2 ? result *= word2[idx2:end] : result *= word1[idx1:end]

  return result
end

export mergeStringsAlternately

using Test

Test.@testset "mergeStringsAlternately" begin
  Test.@test mergeStringsAlternately("abc", "pqr") == "apbqcr"
  Test.@test mergeStringsAlternately("ab", "pqrs") == "apbqrs"
  Test.@test mergeStringsAlternately("abcd", "pq") == "apbqcd"
end