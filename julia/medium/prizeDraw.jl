struct NameScoreWeight
  name::String
  score::Int64
  weight::Int64
end

function prizeDraw(names::String, weights::Array{Int64,1}, rank::Int64)
  if length(names) == 0 || length(weights) == 0 || rank == 0
    return "No participants"
  end

  if length(split(names, ",")) < rank
    return "Not enough participants"
  end

  upperAlphabets = collect('A':'Z')
  lowerAlphabets = collect('a':'z')

  upperAlphabetMap::Dict{String,Int64} = Dict()
  for (idx, val) in pairs(upperAlphabets)
    upperAlphabetMap[string(val)] = idx
  end

  lowerAlphabetMap::Dict{String,Int64} = Dict()
  for (idx, val) in pairs(lowerAlphabets)
    lowerAlphabetMap[string(val)] = idx
  end

  namesArr = split(names, ",")

  namesScoresWeightsArr::Array{NameScoreWeight,1} = []
  for (idx, val) in pairs(namesArr)
    nameLength = length(val)

    score = (mapreduce(char -> haskey(upperAlphabetMap, char) ? get(upperAlphabetMap, char, 0) : get(lowerAlphabetMap, char, 0), +, split(val, "")) + nameLength) * weights[idx]

    push!(namesScoresWeightsArr, NameScoreWeight(val, score, weights[idx]))
  end

  sortedNamesScoresWeightsArr = sort(namesScoresWeightsArr, by=x -> (-x.score, x.name), rev=false)

  return sortedNamesScoresWeightsArr[rank].name
end



println(prizeDraw("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4))
println(prizeDraw("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4))
println(prizeDraw("Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden", [1, 3, 5, 5, 3, 6], 2))

