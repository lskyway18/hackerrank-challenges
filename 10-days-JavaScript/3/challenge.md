# Objective

In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

# Task

Complete the reverseString function; it has one parameter, `s`. You must perform the following actions:

1. Try to reverse string `s` using the split, reverse, and join methods.
2. If an exception is thrown, catch it and print the contents of the exception's *message*  on a new line.
3. Print `s` on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

# Input Format

Locked stub code in the editor reads variable `s` from stdin and passes it to the function.

# Output Format

You must write two print statements using `console.log()`:

1. Print the contents of a caught exception's *message* on a new line. If no exception was thrown, this line should not be printed.
2. Print `s` on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

# Sample Input 0

```
"1234"
```

# Sample Output 0

```
4321
```

# Explanation 0

`s = "1234"` is a string type, so it can be reversed without throwing an exception. Thus, we print the reversed value, 4321, as our answer.

# Sample Input 1

```
Number(1234)
```

# Sample Output 1

```
s.split is not a function
1234
```

# Explanation 1

`s = Number(1234)` is not a string type, so it can't be reversed using string functions. When we try to reverse it anyway, it throws an exception. We then catch the exception and print its , which is `s.split is not a function`. Next, we finally print  which, because it wasn't able to be reversed, is `Number(1234)`.