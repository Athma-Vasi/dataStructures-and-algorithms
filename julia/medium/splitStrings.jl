
function splitStrings(str::String)
  resultArr::Array{String,1} = []
  count = 0
  tempStr = ""

  for (idx, val) in enumerate(str)
    if count < 2
      tempStr *= val
      count += 1
    else
      push!(resultArr, tempStr)
      tempStr = ""
      tempStr *= val
      count = 1
    end
  end

  length(tempStr) == 1 ? push!(resultArr, tempStr * "_") : push!(resultArr, tempStr)

  return resultArr
end

println(splitStrings("abc")) # ["ab", "c_"]
println(splitStrings("abcdef")) # ["ab", "cd", "ef"]


