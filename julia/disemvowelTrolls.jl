function disemvowelTrolls(str::String)
  vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  # strNoVowels = ""
  # for i in 1:length(str)
  #   if !in(str[i], vowels)
  #     strNoVowels = strNoVowels * str[i]
  #   end
  # end
  # return strNoVowels

  return join([i for i in str if !in(i, vowels)])

end

