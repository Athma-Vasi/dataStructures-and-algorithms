# fails when two words are the same values and does not return the word with the first occurence

function high(words::String)
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  alphabet_values = Dict{String,Int}()

  for (index, char) in enumerate(alphabet)
    alphabet_values[string(char)] = index
  end

  word_values = Dict{String,Int}()
  split_words = split(words, " ")

  for word in split_words
    word_values[word] = sum(map(char -> alphabet_values[string(char)], split(word, "")))
  end

  return reduce((a, b) -> a[2] > b[2] ? a : b, word_values)[1]
end

println(high("aa b"))
println(high("b aa"))
println(high("what time are we climbing up the volcano"))