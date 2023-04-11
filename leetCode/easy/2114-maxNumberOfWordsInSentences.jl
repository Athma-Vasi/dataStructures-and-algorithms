function maxNumberOfWordsInSentences(sentences::Vector{String})
  return map(sentence -> split(sentence, " ") |> length, sentences) |> maximum
end

export maxNumberOfWordsInSentences

using Test

Test.@testset "1. maxNumberOfWordsInSentences" begin
  sentences = ["Hello World", "I am a leetcode"]
  result = 4
  Test.@test maxNumberOfWordsInSentences(sentences) == result
end

Test.@testset "2. maxNumberOfWordsInSentences" begin
  sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
  result = 6
  Test.@test maxNumberOfWordsInSentences(sentences) == result
end

Test.@testset "3. maxNumberOfWordsInSentences" begin
  sentences = ["please wait", "continue to fight", "continue to win"]
  result = 3
  Test.@test maxNumberOfWordsInSentences(sentences) == result
end