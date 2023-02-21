function validBraces(braces::String)
  if length(braces) == 0
    return true
  end

  if length(braces) % 2 != 0
    return false
  end

  bracesArr = split(braces, "")
  bracesStack::Array{String,1} = []

  for (_, val) in pairs(bracesArr)
    if val == "(" || val == "[" || val == "{"
      push!(bracesStack, val)
    else
      if length(bracesStack) == 0
        return false
      end

      if val == ")"
        if bracesStack[end] != "("
          return false
        end
      elseif val == "]"
        if bracesStack[end] != "["
          return false
        end
      elseif val == "}"
        if bracesStack[end] != "{"
          return false
        end
      end

      pop!(bracesStack)
    end
  end

  return length(bracesStack) == 0
end
