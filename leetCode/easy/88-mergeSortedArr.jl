function mergeSortedArr(nums1::Array{T,1}, m::T, nums2::Array{T,1}, n::T) where {T<:Integer}
  left = m
  right = n
  numsLen = length(nums1)

  for i in reverse(1:numsLen)
    if right < 1
      break
    end

    if left >= 1 && nums1[left] > nums2[right]
      nums1[i] = nums1[left]
      left -= 1
    else
      nums1[i] = nums2[right]
      right -= 1
    end
  end
end

export mergeSortedArr

using Test

Test.@testset "mergeSortedArr" begin
  nums1 = [1, 2, 3, 0, 0, 0]
  nums2 = [2, 5, 6]
  mergeSortedArr(nums1, 3, nums2, 3)
  Test.@test nums1 == [1, 2, 2, 3, 5, 6]

  nums1 = [1]
  nums2::Array{Int64,1} = []
  mergeSortedArr(nums1, 1, nums2, 0)
  Test.@test nums1 == [1]

  nums1 = [0]
  nums2 = [1]
  mergeSortedArr(nums1, 0, nums2, 1)
  Test.@test nums1 == [1]

  nums1 = [4, 0, 0, 0, 0, 0]
  nums2 = [1, 2, 3, 5, 6]
  mergeSortedArr(nums1, 1, nums2, 5)
  Test.@test nums1 == [1, 2, 3, 4, 5, 6]
end