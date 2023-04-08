function twoSort(array::Array{String,1})
  sort!(array)
  return join(array[1], "***")
end