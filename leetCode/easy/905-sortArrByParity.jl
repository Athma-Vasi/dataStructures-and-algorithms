function sortArrByParity(nums::Vector{Int64})
  oddArr::Vector{Int64} = []
  evenArr::Vector{Int64} = []

  for num in nums
    num % 2 == 0 ? push!(evenArr, num) : push!(oddArr, num)
  end

  return [evenArr..., oddArr...]
end

