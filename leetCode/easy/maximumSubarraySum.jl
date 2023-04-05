function maximumSubarraySum(nums::Array{T,1}) where {T<:Real}
  numsLength = length(nums)
  maxSum = -Inf
  currentSum = 0

  for idx in 1:numsLength
    currentSum += nums[idx]

    maxSum = max(maxSum, currentSum)

    if currentSum < 0
      currentSum = 0
    end
  end

  return Int(maxSum)
end




println(maximumSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
# [-5, -3, -2, -1, 1, 1, 2, 4, 4]



# maxSum = 0
#   maxSumStart = 0
#   maxSumEnd = 0
#   currentSum = 0
#   currentSumStart = 0
#   currentSumEnd = 0
#   numsLength = length(nums)

#   for i in 1:numsLength
#     currentSum += nums[i]
#     currentSumEnd = i
#     if currentSum > maxSum
#       maxSum = currentSum
#       maxSumStart = currentSumStart
#       maxSumEnd = currentSumEnd
#     end
#     if currentSum < 0
#       currentSum = 0
#       currentSumStart = i + 1
#       currentSumEnd = i + 1
#     end
#   end
#   return nums[maxSumStart:maxSumEnd]