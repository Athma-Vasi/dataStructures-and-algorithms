function areYouPlayingBanjo(name::String)
  strArr = ['r', 'R']

  return in(name[1], strArr) ? name * " plays banjo" : name * " does not play banjo"

end