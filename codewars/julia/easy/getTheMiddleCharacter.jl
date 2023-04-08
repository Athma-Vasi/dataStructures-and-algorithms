function getTheMiddleChar(str::String)
  return length(str) % 2 == 0 ? string(str[div(length(str), 2):div(length(str), 2)+1]) : string(str[div(length(str), 2)+1])
end