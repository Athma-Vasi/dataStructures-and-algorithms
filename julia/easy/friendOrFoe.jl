function friendOrFoe(friends::Vector{String})
  return filter(friend -> length(friend) == 4, friends)
end