function invert(arr::Array{Int64,1})
    return map(x -> -x, arr)
end