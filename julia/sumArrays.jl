function sumArray(arr::Array{Int64,1})
    # sum = 0
    # for i in arr
    #     sum += i
    # end
    # return sum

    return reduce(+, arr)
end