function strExpansion(str::String)
  if str == ""
    return ""
  end

  alphabetLower = map(char -> string(char), collect('a':'z'))
  alphabetUpper = map(char -> string(char), collect('A':'Z'))

  filteredStr = filter(char -> char in alphabetLower || char in alphabetUpper, split(str, ""))

  if length(filteredStr) == 0
    return ""
  end

  splitStrArr = splitStrings(str)
  expandAmt = 1
  resultStr = ""

  for (_, (leftChar, rightChar)) in pairs(splitStrArr)
    if isdigit(leftChar)
      expandAmt = parse(Int, leftChar)
    else
      resultStr *= repeat(leftChar, expandAmt)
    end

    if isdigit(rightChar)
      expandAmt = parse(Int, rightChar)
    else
      resultStr *= repeat(rightChar, expandAmt)
    end
  end

  return join(filter(char -> char != " ", split(resultStr, "")), "")
end

function splitStrings(str::String)
  resultArr::Array{String,1} = []
  count = 0
  tempStr = ""

  for (_, val) in enumerate(str)
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

  length(tempStr) == 1 ? push!(resultArr, tempStr * " ") : push!(resultArr, tempStr)

  return resultArr
end

println(strExpansion("3abc")) # "abcabcabc"
println(strExpansion("3D2a5d2f")) # "DDDaadddddff"
println(strExpansion("0d0a0v0t0y")) # ""
println(strExpansion("abcde")) # ""

