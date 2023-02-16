function squareNsum(n::Array{Int64})
    
    return reduce(+, map( x -> x^2, n ))
end

