function fakeBinary(str::String)
  funcs = [
    val -> val < 5 ? "0" : "1",
    val -> parse(Int, val)
  ]

  splitStr = split(str, "")
  # binaryArr = map(char -> ∘(funcs...)(char), splitStr)
  binaryArr = mapreduce(char -> ∘(funcs...)(char), vcat, splitStr)

  return join(binaryArr)
end

println(fakeBinary("45385593107843568") == "01011110001100111")