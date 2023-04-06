function lengthOfLastWord(s::String)
  return strip(s) |> (ds -> split(ds, " ")) |> last |> length
end

export lengthOfLastWord

using Test

# unit tests
@testset "lengthOfLastWord" begin
  @test lengthOfLastWord("Hello World") == 5
  @test lengthOfLastWord(" ") == 0
  @test lengthOfLastWord("a ") == 1
  @test lengthOfLastWord("a") == 1
  @test lengthOfLastWord("a b") == 1
  @test lengthOfLastWord("a b ") == 1
  @test lengthOfLastWord(" witness me shiny and chrome ") == 6
end