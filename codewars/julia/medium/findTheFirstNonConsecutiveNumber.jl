function firstNonConsecutive(arr::Vector{Int64})
  leftPointer = 1
  rightPointer = 2

  while rightPointer <= length(arr)
    if arr[rightPointer] - arr[leftPointer] != 1
      return arr[rightPointer]
    end

    leftPointer += 1
    rightPointer += 1
  end

  return nothing
end