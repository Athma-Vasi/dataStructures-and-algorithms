function stockList(listArt::Array{String,1}, listCat::Array{String,1})
  if length(listArt) == 0 || length(listCat) == 0
    return ""
  end

  listArtMap::Dict{String,Int64} = Dict()

  for (_, val) in pairs(listArt)
    valArr = split(val, " ")
    code = string(valArr[1][1])
    quantity = parse(Int64, valArr[2])

    haskey(listArtMap, code) ? listArtMap[code] += quantity : listArtMap[code] = quantity
  end

  result = []

  for (_, val) in pairs(listCat)
    haskey(listArtMap, val) ? push!(result, "($val : $(listArtMap[val]))") : push!(result, "($val : 0)")
  end

  return join(result, " - ")
end

println(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]))

