function decompressRLEncoded(nums::Array{Int64,1})
  left = 1
  right = 2
  numsLen = length(nums)
  decoded::Array{Int64,1} = []

  while right <= numsLen && left < right
    freq = nums[left]
    value = nums[right]

    for _ in 1:freq
      push!(decoded, value)
    end

    left += 2
    right += 2
  end

  return decoded
end

using Test

Test.@testset "decompressRLEncoded" begin
  @test decompressRLEncoded([1, 2, 3, 4]) == [2, 4, 4, 4]
  @test decompressRLEncoded([1, 1, 2, 3]) == [1, 3, 3]
  @test decompressRLEncoded([1, 2, 3, 4, 5, 6, 7, 8]) == [2, 4, 4, 4, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8]
end