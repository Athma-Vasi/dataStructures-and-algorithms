function whoLikesIt(names::Vector{String})::String
  result = ""

  if (length(names) == 0)
    result = "no one likes this"
  elseif (length(names) == 1)
    result = names[1] * " likes this"
  elseif (length(names) == 2)
    result = names[1] * " and " * names[2] * " like this"
  elseif (length(names) == 3)
    result = names[1] * ", " * names[2] * " and " * names[3] * " like this"
  else
    result = names[1] * ", " * names[2] * " and " * string(length(names) - 2) * " others like this"
  end
end

