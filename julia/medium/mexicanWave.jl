# WOW I can't believe I got this algo to work!! I couldn't 
# figure the algo out in the TypeScript version!!

function mexicanWave(str::String)
  idxsOfChars = findall(x -> x != " ", split(str, ""))
  resultArr::Array{String,1} = []

  for (i, _) in enumerate(str)
    if i in idxsOfChars
      tempStr = split(str, "")
      tempStr[i] = uppercase(tempStr[i])
      push!(resultArr, join(tempStr, ""))
    end
  end

  return resultArr
end


println(mexicanWave("hello"))
println(mexicanWave("a       b    ")) # => ["A       b    ", "a       B    "]