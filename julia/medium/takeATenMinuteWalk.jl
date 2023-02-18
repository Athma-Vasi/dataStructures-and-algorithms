function isValidWalk(directions::Vector{Char})
  if length(directions) != 10
    return false
  end

  x = 0
  y = 0

  foreach(dir -> dir == 'n' ? y += 1 : dir == 's' ? y -= 1 : dir == 'e' ? x += 1 : dir == 'w' ? x -= 1 : nothing, directions)

  return x == 0 && y == 0
end