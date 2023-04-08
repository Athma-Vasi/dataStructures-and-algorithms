function descendingOrder(n::Int)
  nStr = string(n)
  nStrArr = split(nStr, "")
  nIntArr = map(x -> parse(Int, x), nStrArr)
  nIntArrSorted = sort(nIntArr, rev=true)

  return parse(Int, join(nIntArrSorted, ""))
end


println(descendingOrder(42145))
