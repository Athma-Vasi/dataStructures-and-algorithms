function betterThanAverage(classPoints::Vector{Int}, yourPoints::Int)
    return yourPoints > (sum(classPoints) / length(classPoints))
end