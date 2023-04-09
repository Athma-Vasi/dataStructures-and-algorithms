# need to fix, fails some tests

function letterCombinationsPhoneNumber(digits::String)::Array{String,1}
  if length(digits) === 0
    return []
  end

  t9Map = Dict{String,String}(
    "1" => "",
    "2" => "abc",
    "3" => "def",
    "4" => "ghi",
    "5" => "jkl",
    "6" => "mno",
    "7" => "pqrs",
    "8" => "tuv",
    "9" => "wxyz",
    "0" => " "
  )

  results::Array{String,1} = []

  function helper(index::Int64, str::String)
    if index === length(digits)
      push!(results, str)
      return
    end

    letters = get(t9Map, digits[index], 1)
    for (idx, _) in pairs(letters)
      helper(index + 1, str * string(letters[idx]))
    end
  end

  helper(1, "")

  return results
end

using Test

@testset "letterCombinationsPhoneNumber" begin
  @test letterCombinationsPhoneNumber("23") == ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
  @test letterCombinationsPhoneNumber("2") == ["a", "b", "c"]
  @test letterCombinationsPhoneNumber("0") == [" "]
  @test letterCombinationsPhoneNumber("") == []
end

