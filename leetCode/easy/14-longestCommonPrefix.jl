function longestCommonPrefix(strs::Array{String,1})::String
  if length(strs) === 0
    return ""
  end

  if length(strs) === 1
    return first(strs)
  end

  # find the min length of arr to use as the loop limit
  minLength = minimum(length, strs)
  # amount of times to keep looping through strs
  arrLoop = 0
  charIdx = 1
  commonSet = Set{Char}()
  commonChars = []

  while arrLoop < minLength
    # loop through strs and add each char to the set
    foreach(str -> push!(commonSet, str[charIdx]), strs)

    # if set length === 1 there is a common prefix and is added to the commonChars array
    if length(commonSet) === 1
      char = first(values(commonSet))
      push!(commonChars, char)
    else
      push!(commonChars, ' ')
    end

    # reset set
    commonSet = Set{Char}()
    charIdx += 1
    arrLoop += 1
  end

  # if the first char is a space, then no common prefix
  if first(commonChars) === ' '
    return ""
  else
    commonCharsStr = commonChars |> join |> strip
    return first(split(commonCharsStr, ' '))
  end
end



using Test

Test.@testset "longestCommonPrefix" begin
  # leetcode tests
  @test longestCommonPrefix(["flower", "flow", "flight"]) === "fl"
  @test longestCommonPrefix(["dog", "racecar", "car"]) === ""
  @test longestCommonPrefix([""]) === ""
  @test longestCommonPrefix(["a"]) === "a"
  @test longestCommonPrefix(["a", "b"]) === ""
  @test longestCommonPrefix(["a", "a"]) === "a"
  @test longestCommonPrefix(["a", "a", "b"]) === ""
  @test longestCommonPrefix(["a", "a", "a"]) === "a"
  @test longestCommonPrefix(["cir", "car"]) === "c"
  @test longestCommonPrefix(["aa", "a"]) === "a"
  @test longestCommonPrefix(["a", "aa"]) === "a"
  @test longestCommonPrefix(["aca", "cba"]) === ""
  @test longestCommonPrefix(["babb", "caa"]) === ""
end
