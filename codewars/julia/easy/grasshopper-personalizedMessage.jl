function greet(name::String, owner::String)
  return name == owner ? "Hello boss" : "Hello guest"
end