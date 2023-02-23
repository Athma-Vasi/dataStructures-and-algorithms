function findTheMissingLetter(arr::Array{Char,1})
  for i in 1:length(arr)-1
    if arr[i+1] != Char(Int(arr[i]) + 1)
      return Char(Int(arr[i]) + 1)
    end
  end
end