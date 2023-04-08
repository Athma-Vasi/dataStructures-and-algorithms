function basicOperations(oper::String, v1::Real, v2::Real)
  # if oper == "+"
  #   return v1 + v2
  # elseif oper == "-"
  #   return v1 - v2
  # elseif oper == "*"
  #   return v1 * v2
  # elseif oper == "/"
  #   return v1 / v2
  # else
  #   return "Invalid operation"
  # end

  return oper == "+" ? v1 + v2 : oper == "-" ? v1 - v2 : oper == "*" ? v1 * v2 : oper == "/" ? v1 / v2 : "Invalid operation"
end
