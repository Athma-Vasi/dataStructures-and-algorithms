function sumArray(arr::Int)
  if (arr === nothing || length(arr) <= 2)
    return 0
  end

  sortedArr = sort(arr)
  lengthArr = length(arr)
  sortedArr[1] = 0
  sortedArr[lengthArr] = 0

  return sum(sortedArr)
end