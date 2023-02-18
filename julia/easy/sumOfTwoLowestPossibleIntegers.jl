function sumTwoSmallestNumbers(numbers::Tuple{Int})
  sortedNums = sort(numbers)
  return sortedNums[1] + sortedNums[2]
end