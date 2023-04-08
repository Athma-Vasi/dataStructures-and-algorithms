function stringRepeat(num::Int, str::String)
  return join(fill(str, num))
end