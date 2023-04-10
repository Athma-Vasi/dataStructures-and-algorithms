function decodeTheMessage(key::String, message::String)
  alphabet = collect('a':'z')

  cypherPad = Dict{String,String}()
  keyCondensed = key |> (key -> replace(key, " " => "")) |> join
  keySetArr::Array{String,1} = []

  # because Set in Julia is not ordered, need to use an array
  for (_, val) in enumerate(keyCondensed)
    if string(val) ∉ keySetArr
      push!(keySetArr, string(val))
    end
  end

  for (idx, char) in enumerate(keySetArr)
    if !haskey(cypherPad, char)
      cypherPad[char] = string(alphabet[idx])
    end
  end

  decrypted::Array{String,1} = []

  for (_, val) in enumerate(message)
    push!(decrypted, get(cypherPad, string(val), " "))
  end

  return join(decrypted)
end

export decodeTheMessage

using Test

# unit tests
@testset "decodeTheMessage" begin
  key = "the quick brown fox jumps over the lazy dog"
  message = "vkbs bs t suepuv"
  result = "this is a secret"
  @test decodeTheMessage(key, message) == result

  key = "eljuxhpwnyrdgtqkviszcfmabo"
  message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  result = "the five boxing wizards jump quickly"
  @test decodeTheMessage(key, message) == result
end