# not my solution; it is psmilliorn's solution
# mine was 3 times longer and did not work for all cases

function findEvenIndex(arr::Array{Int64,1})
  rightSum = sum(arr)
  leftSum = 0

  for i in eachindex(arr)
    rightSum -= arr[i]

    if leftSum == rightSum
      return i - 1
    end

    leftSum += arr[i]
  end

  return -1
end



