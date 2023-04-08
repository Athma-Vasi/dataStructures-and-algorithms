function whichAreIn(array1::Array{String,1}, array2::Array{String,1})
  resultArr::Array{String,1} = []

  for str in array1
    for str2 in array2
      if occursin(str, str2)
        push!(resultArr, str)
        break
      end
    end
  end

  return unique(sort!(resultArr))
end

println(whichAreIn(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))