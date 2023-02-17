function dnaToRna(dna::String)
  dna = replace(dna, "T" => "U")
  return dna
end

println(dnaToRna("TTTT"))