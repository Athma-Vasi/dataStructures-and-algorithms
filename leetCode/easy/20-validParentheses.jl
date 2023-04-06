function validParentheses(s::String)::Bool
  # create a stack to hold the open parentheses
  stack = []
  # create a map of the open and close parentheses
  parentheses = Dict(
    '(' => ')',
    '{' => '}',
    '[' => ']'
  )
  # loop through the string
  for char in s
    # if the char is an open parentheses, push it to the stack
    if char in keys(parentheses)
      push!(stack, char)
      # if the char is a close parentheses, check if the last open parentheses is a match
    elseif char in values(parentheses)
      # if the stack is empty, return false
      if length(stack) == 0
        return false
      end
      # if the last open parentheses is not a match, return false
      if parentheses[stack[end]] != char
        return false
      end
      # if the last open parentheses is a match, pop it off the stack
      pop!(stack)
    end
  end
  # if the stack is empty, return true
  return length(stack) == 0
end

using Test

Test.@testset "validParentheses" begin
  # leetcode tests
  @test validParentheses("()") === true
  @test validParentheses("()[]{}") === true
  @test validParentheses("(]") === false
  @test validParentheses("([)]") === false
  @test validParentheses("{[]}") === true
  @test validParentheses("]") === false
end

