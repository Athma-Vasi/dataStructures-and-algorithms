function isograms(str::AbstractString)
  return length(lowercase(str)) == length(unique(lowercase(str)))
end

