# passes all tests but returns a syntax error: unexpected "end"

function toAlternatingCase(string)
  result = ""

  for char in string
    char == lowercase(char) ? result *= uppercase(char) : result *= lowercase(char)
  end

  return result
end

println(toAlternatingCase("hello world") == "HELLO WORLD")
println(toAlternatingCase("HELLO WORLD") == "hello world")
println(toAlternatingCase("hello WORLD") == "HELLO world")
println(toAlternatingCase("HeLLo WoRLD") == "hEllO wOrld")
println(toAlternatingCase("12345") == "12345")
println(toAlternatingCase("1a2b3c4d5e") == "1A2B3C4D5E")
println(toAlternatingCase("String.prototype.toAlternatingCase") == "sTRING.PROTOTYPE.TOaLTERNATINGcASE")


