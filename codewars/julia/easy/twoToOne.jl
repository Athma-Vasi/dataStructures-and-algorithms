function twoToOne(a1::String, a2::String)
  a1Unique = unique(a1)
  a2Unique = unique(a2)
  a1a2Joined = join([a1Unique; a2Unique])
  a1a2Unique = unique(a1a2Joined)
  a1a2UniqueSorted = sort(a1a2Unique)

  return join(a1a2UniqueSorted)

end

println(twoToOne("xyaabbbccccdefww", "xxxxyyyyabklmopq"))