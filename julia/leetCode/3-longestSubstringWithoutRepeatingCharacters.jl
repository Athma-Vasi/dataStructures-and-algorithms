function longestUniqueSubstringLength(str::AbstractString)::Int64
  strLength = length(str)
  if strLength < 2
    return str
  end

  # keeps track of the most recent index of each letter
  charIdxMap::Dict{Char,Int64} = Dict()
  # keeps track of starting index of current substring  
  start = 1
  # keeps track of maximum substring length
  maxLength = 0

  for idx in 1:strLength
    char = str[idx]
    # if the current char was charIdxMap, move start to (1 + last idx of char)
    # max prevents moving backward, `start` can only move forward
    if char in keys(charIdxMap)
      charIdxIncharIdxMap = get(charIdxMap, char, 0)
      start = max(charIdxIncharIdxMap, start)
    end

    setindex!(charIdxMap, idx, char)
    # maximum of current substring length and maxLength
    maxLength = max(idx - start, maxLength)
  end

  return maxLength
end



# sample leetcode tests
println(longestUniqueSubstringLength("abcabcbb"))
println(longestUniqueSubstringLength("bbbbb"))
println(longestUniqueSubstringLength("pwwkew"))

