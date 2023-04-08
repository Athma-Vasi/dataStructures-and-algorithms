# bug where spaces are being returned as '!' from shiftCar...
function passPhrase(str::String, shift::Int)
  shiftedChars = []
  for (_, char) in enumerate(str)
    push!(shiftedChars, shiftChar(char, shift))
  end
  return join(shiftedChars, "")

  ninesComplemented = []
  for (_, char) in enumerate(shiftedChars)
    push!(ninesComplemented, ninesComplement(char))
  end
  # return ninesComplemented

  alternateCased = []
  for (idx, char) in enumerate(ninesComplemented)
    push!(alternateCased, alternateCase(idx, char))
  end
  # return alternateCased
end

function shiftChar(char::Char, shift::Int)
  alphabetLower = string(collect('a':'z'))
  alphabetUpper = string(collect('A':'Z'))

  if isdigit(char)
    return char
  else
    if char in alphabetLower
      return alphabetLower[(findfirst(isequal(char), alphabetLower))] + shift % 26
    elseif char in alphabetUpper
      return alphabetUpper[(findfirst(isequal(char), alphabetUpper))] + shift % 26
    else
      return char
    end
  end

end

function ninesComplement(char::Char)
  if isdigit(char)
    return string(9 - parse(Int, char))
  else
    return char
  end
end

function alternateCase(idx::Int, char::Union{Char,String})
  if isletter(only(char))
    if idx % 2 == 0
      return lowercase(char)
    else
      return uppercase(char)
    end
  else
    return char
  end
end

# println(passPhrase("abc", 1)) # bcd
# println(passPhrase("abc", 26)) # abc
println(passPhrase("BORN IN 2015!", 1)) # CPSO JO 2015!



