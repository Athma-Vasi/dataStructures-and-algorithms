function validParentheses(str::String)
  strArr = split(str, "")
  strArr = filter(str -> str == "(" || str == ")", strArr)
  strStack::Array{String,1} = []

  if length(strArr) == 0
    return true
  end

  if length(strArr) % 2 != 0
    return false
  end

  for (_, val) in pairs(strArr)
    if val == "("
      push!(strStack, val)
    else
      if length(strStack) == 0
        return false
      end

      if val == ")"
        if strStack[end] != "("
          return false
        end
      end

      pop!(strStack)
    end
  end

  return length(strStack) == 0
end

println(validParentheses("(1((s)))+<}m(()J2r()(84())gQt)()Xy,W(r())@RQ]"))