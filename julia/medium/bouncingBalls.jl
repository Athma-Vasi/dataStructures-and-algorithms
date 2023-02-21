function bouncingBalls(height::Int, bounce::Float64, window::Int)
  if height <= 0 || bounce <= 0 || bounce >= 1 || window >= height
    return -1
  end

  height_ = height
  count = 0

  while height_ > window
    height_ *= bounce
    count += 2
  end

  return count - 1
end