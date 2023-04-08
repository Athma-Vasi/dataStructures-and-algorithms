function consecutiveStrings(strArr::Array{String,1}, k::Int)
  # using two pointers
  if k > length(strArr)
    return ""
  end

  lengthStrArr = length(strArr)
  maxStr = ""
  tempStr = ""
  leftPointer = 1
  rightPointer = k

  while rightPointer <= lengthStrArr
    for i in leftPointer:rightPointer
      tempStr *= strArr[i]
    end

    if (length(tempStr) > length(maxStr))
      maxStr = tempStr
    end

    leftPointer += 1
    rightPointer += 1
    tempStr = ""
  end

  return maxStr
end

testArr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"]

println(consecutiveStrings(testArr, 2))
