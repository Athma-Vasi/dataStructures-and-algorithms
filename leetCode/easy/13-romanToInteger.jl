function romanToInteger(s::String)
  romanIntDict = Dict([
    'I' => 1,
    'V' => 5,
    'X' => 10,
    'L' => 50,
    'C' => 100,
    'D' => 500,
    'M' => 1000
  ])

  ans = 0
  idx = 1
  len = length(s)

  # for (idx, char) in enumerate(s)
  #   if idx === len
  #     ans += get(romanIntDict, char, 0)
  #   else
  #     if get(romanIntDict, char, 0) < get(romanIntDict, char[idx+1], 0)
  #       ans -= get(romanIntDict, char, 0)
  #     else
  #       ans += get(romanIntDict, char, 0)
  #     end
  #   end
  # end

  while (idx <= len)
    leftChar = s[idx]
    leftNum = get(romanIntDict, leftChar, 0)

    if (idx === len)
      ans += leftNum
      break
    end

    rightChar = s[idx+1]
    rightNum = get(romanIntDict, rightChar, 0)

    if leftNum < rightNum
      ans -= leftNum
    else
      ans += leftNum
    end

    idx += 1
  end

  return ans
end


export romanToInteger

# tests
using Test

Test.@testset "romanToInteger" begin
  # leetcode tests
  @test romanToInteger("III") === 3
  @test romanToInteger("IV") === 4
  @test romanToInteger("IX") === 9
  @test romanToInteger("LVIII") === 58
  @test romanToInteger("MCMXCIV") === 1994
  @test romanToInteger("MMMCMXCIX") === 3999
  # more tests
  @test romanToInteger("I") === 1
  @test romanToInteger("II") === 2
  @test romanToInteger("V") === 5
  @test romanToInteger("X") === 10
  @test romanToInteger("L") === 50
  @test romanToInteger("C") === 100
  @test romanToInteger("D") === 500
  @test romanToInteger("M") === 1000
  @test romanToInteger("MM") === 2000
  @test romanToInteger("MMM") === 3000
  @test romanToInteger("MMMCM") === 3900
  @test romanToInteger("MMMCMX") === 3910
  @test romanToInteger("MMMCMXC") === 3990
  @test romanToInteger("MMMCMXCV") === 3995
  @test romanToInteger("MMMCMXCIX") === 3999

end

