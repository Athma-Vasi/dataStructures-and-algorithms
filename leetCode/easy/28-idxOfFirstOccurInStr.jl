function idxOfFirstOccurInStr(haystack::String, needle::String)::Int
  hayLen = length(haystack)
  needleLen = length(needle)

  if needleLen === 0
    return 0
  end

  if hayLen < needleLen
    return -1
  end

  if hayLen === needleLen
    return haystack === needle ? 0 : -1
  end

  hayIdx = 0
  needleIdx = 1

  while hayIdx <= hayLen && needleIdx <= needleLen
    char1 = haystack[hayIdx+needleIdx]
    char2 = needle[needleIdx]

    if char1 === char2
      needleIdx += 1
    else
      hayIdx += 1
      needleIdx = 1
    end
  end

  return needleIdx === needleLen + 1 ? hayIdx + 1 : -1
end
k
# println(idxOfFirstOccurInStr("mississippi", "issip"))

using Test

Test.@testset "idxOfFirstOccurInStr" begin
  @test idxOfFirstOccurInStr("hello", "ll") == 3
  @test idxOfFirstOccurInStr("sadbutsad", "sad") == 1
  @test idxOfFirstOccurInStr("sadbutsad", "sadbut") == 1
  @test idxOfFirstOccurInStr("mississippi", "issip") == 5
end
