function insertionSort(array::Vector{T}) where {T<:Real}
  arrLen = length(array)

  for right in 2:arrLen
    key = array[right] # key
    # insert rightNum into sorted subarray array[1 : right - 1]
    left = right - 1

    while left > 0 && array[left] > key
      array[left+1] = array[left]
      left = left - 1
      array[left+1] = key
    end
  end

  return array
end

println(insertionSort([5, 2, 4, 6, 1, 3]))
println(insertionSort([5.5, 2.2, 4, 6, 1, 3]))
# println(insertionSort(2))
# println(insertionSort(Dict([('A', 2)])))