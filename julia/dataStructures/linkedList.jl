mutable struct ListNode
  val::Any
  next::Union{ListNode,Nothing}
end

function LinkedList(values::Array{T,1} where {T})::Union{ListNode,Nothing}
  head::Union{ListNode,Nothing} = nothing
  tail::Union{ListNode,Nothing} = nothing

  for (_, val) in pairs(values)
    if head === nothing
      head = ListNode(val, nothing)
      tail = head
    else
      tail.next = ListNode(val, nothing)
      tail = tail.next
    end
  end

  return head
end

function printLinkedList(head::Union{ListNode,Nothing})
  if head === nothing
    return nothing
  end

  curr::Union{ListNode,Nothing} = head

  while curr !== nothing
    print(curr.val, " ")
    curr = curr.next
  end
end

function reverseLinkedList(head::Union{ListNode,Nothing})
  if head === nothing
    return nothing
  end

  prev::Union{ListNode,Nothing} = nothing
  curr::Union{ListNode,Nothing} = head
  next::Union{ListNode,Nothing} = nothing

  while curr !== nothing
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  end

  return prev
end

function reverseLinkedListRecursive(head::Union{ListNode,Nothing})
  if head === nothing || head.next === nothing
    return head
  end

  newHead = reverseLinkedListRecursive(head.next)
  head.next.next = head
  head.next = nothing

  return newHead
end

arr = [1, 2, 3, 4, 5]
head = LinkedList(arr)
printLinkedList(head)