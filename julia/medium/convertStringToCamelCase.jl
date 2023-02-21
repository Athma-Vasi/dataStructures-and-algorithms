function toCamelCase(str::String)
  if str == ""
    return ""
  end

  if occursin("_", str)
    str = replace(str, "_" => " ")
  end

  if occursin("-", str)
    str = replace(str, "-" => " ")
  end

  result = ""

  for (i, v) in pairs(split(str, " "))
    if i == 1
      result *= v
    end

    if i > 1
      result *= uppercase(v[1]) * lowercase(v[2:end])
    end
  end

  return result
end



println(toCamelCase("the_stealth_warrior"))
println(toCamelCase("The-Stealth-Warrior"))
println(toCamelCase("A-B-C"))
println(toCamelCase(""))
println(toCamelCase("I-am-a-programmer"))