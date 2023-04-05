function isPalindrome(x::Int64)
  if x < 0
    return false
  end

  if x < 10
    return true
  end

  numStr = string(x)
  len = length(numStr)
  mid = floor(len / 2)
  left = 0
  right = len

  while (left < mid)
    if numStr[left+1] !== numStr[right]
      return false
    end

    left += 1
    right -= 1
  end

  return true
end


export isPalindrome

using Test

# sample tests 
Test.@testset "isPalindrome" begin
  @test isPalindrome(121) == true
  @test isPalindrome(-121) == false
  @test isPalindrome(10) == false
  @test isPalindrome(0) == true
  @test isPalindrome(1) == true
  @test isPalindrome(11) == true
  @test isPalindrome(111) == true
end








