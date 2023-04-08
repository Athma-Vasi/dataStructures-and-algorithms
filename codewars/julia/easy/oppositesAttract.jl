function loveFunction(flower1Petals::Int, flower2Petals::Int)
  return flower1Petals % 2 == 0 && flower2Petals % 2 == 1 || flower1Petals % 2 == 1 && flower2Petals % 2 == 0
end