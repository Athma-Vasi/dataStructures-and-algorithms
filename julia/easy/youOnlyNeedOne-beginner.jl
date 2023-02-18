function check(arr::Array{T}, element::T) where {T}
  if (arr === nothing || length(arr) == 0)
    return false
  end

  for elem in arr
    if (elem == element)
      return true
    end
  end

  return false
end