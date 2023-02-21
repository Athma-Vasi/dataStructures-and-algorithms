function shortestWord(wordsStr::String)
  wordsArr = split(wordsStr, " ")
  lengthArr = map(length, wordsArr)

  return minimum(lengthArr)
end
