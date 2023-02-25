function sum(x::Int64)
  return function (y::Int64)
    return x + y
  end
end

a = sum(5)(10)


println(a)

function parallelPipe(functions::Function...)::Function
  return function (value::T where {T<:Any})
    value_ = value
    tasks = Vector{Task}(undef, length(functions))

    for (idx, fn) in enumerate(functions)
      tasks[idx] = Threads.@spawn value_ = fn(value_)
    end

    for task in tasks
      wait(task)
    end

    return value_
  end
end


function addOne(x::Int64)
  return x + 1
end

function addTwo(x::Int64)
  return x + 2
end

function addThree(x::Int64)
  return x + 3
end

function addFour(x::Int64)
  return x + 4
end

function addFive(x::Int64)
  return x + 5
end

function addSix(x::Int64)
  return x + 6
end

b = parallelPipe(
  addOne,
  addTwo,
  addThree,
  addFour,
  addFive,
  addSix
)(1)

println(b)