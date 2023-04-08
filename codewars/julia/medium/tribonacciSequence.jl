function tribonacci(a::Real, b::Real, c::Real, n::Int)

  # iterative method to find tribonacci array from 1:n
  resultArr::Array{Real,1} = [a, b, c]
  a_ = a
  b_ = b
  c_ = c

  for i in 3:n
    a_, b_, c_ = b_, c_, a_ + b_ + c_
    push!(resultArr, c_)
  end

  return resultArr[1:n]
end

println(tribonacci(1, 1, 1, 10) == [1, 1, 1, 3, 5, 9, 17, 31, 57, 105])

