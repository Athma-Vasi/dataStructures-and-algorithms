function centuryFromYear(year::Int)::Int
  return ceil(Int, year / 100)
end