function abbrevName(name::String)
  splitName = map(word -> uppercasefirst(word), split(name, " "))

  return splitName[1][1] * "." * splitName[2][1]
end