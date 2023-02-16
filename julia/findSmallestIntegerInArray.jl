function findSmallestInt(arr::Array{Int64,1})
    return reduce(min, arr)
end