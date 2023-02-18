function squareDigits(num::Int)
  strToStrArr = [
    collect
    string
  ]

  strArrToSquaredStr = [
    val -> string(val)
    val -> val^2
    val -> parse(Int, val)
  ]

  stringified = (∘(strToStrArr...)(num))

  squared = map(char -> ∘(strArrToSquaredStr...)(char), stringified)

  return parse(Int, join(squared))
end


# fs = [
#   x -> 2x
#   x -> x^2
#   x -> x + 1
# ]

# println(∘(fs...)(2))

# println(map(y -> ∘(fs...)(y), [1, 2, 3]))

strToStrArr = [
  collect
  string
]

strArrToSquaredStr = [
  val -> string(val)
  val -> val^2
  val -> parse(Int, val)
]

squaredStrArrToNum = [
  join
  parse
]

stringified = (∘(strToStrArr...)(9119))

println("stringified", stringified)

squared = map(char -> ∘(strArrToSquaredStr...)(char), stringified)

println("squared", squared)

