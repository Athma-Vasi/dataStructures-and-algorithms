function dnaStrand(dna::String)
  complimentaryMap = Dict(
    "A" => "T",
    "T" => "A",
    "C" => "G",
    "G" => "C"
  )

  return join(map(char -> get(complimentaryMap, char, char), split(dna, "")), "")
end

println(dnaStrand("AAAA"))
println(dnaStrand("ATTGC"))