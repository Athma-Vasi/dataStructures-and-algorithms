function queueTime(customers::Vector{Int64}, checkouts::Int64)::Int64
  if length(customers) == 0
    return 0
  end

  if checkouts == 1
    return sum(customers)
  end

  if checkouts >= length(customers)
    return maximum(customers)
  end

  tills = zeros(Int64, checkouts)
  for customer in customers
    tills[argmin(tills)] += customer
  end

  return maximum(tills)
end

println(queueTime([1, 2, 3, 4], 1) == 10)
println(queueTime([2, 2, 3, 3, 4, 4], 2) == 9)
println(queueTime([1, 2, 3, 4, 5], 100) == 5)