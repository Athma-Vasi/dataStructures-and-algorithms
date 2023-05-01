function validPalindrome(s::String)
  if s == " "
    return true
  end

  alphabetSet = collect('a':'z') |> Set

  filteredStr = s |> lowercase |> filter(s -> s in alphabetSet)

  left = 1
  right = length(filteredStr)
  result = true

  while left < right
    if filteredStr[left] != filteredStr[right]
      result = false
    end

    left += 1
    right -= 1
  end

  return result
end

export validPalindrome

using Test

Test.@testset "validPalindrome" begin
  Test.@test validPalindrome("A man, a plan, a canal: Panama") == true
  Test.@test validPalindrome("race a car") == false
  Test.@test validPalindrome(" ") == true
end