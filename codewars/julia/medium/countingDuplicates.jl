function countingDuplicates(text::String)
  if length(text) == 0
    return 0
  end

  textCountMap::Dict{String,Int64} = Dict()
  for (_, val) in pairs(split(text, ""))
    val = lowercase(val)
    if haskey(textCountMap, val)
      textCountMap[val] += 1
    else
      textCountMap[val] = 1
    end
  end

  valuesArr = values(textCountMap) |> collect

  return filter(count -> count > 1, valuesArr) |> length
end

println(countingDuplicates("abcde"))
println(countingDuplicates("aabbcde"))