# non-recursive function 
def fib(input): 
    # base cases
    if input <= 0: 
        return [] 
    if input == 1: 
        return [0]
    
    fibArray = [0, 1]
    num1 = 0
    num2 = 1

# start at 2 and end at the input value
    for i in range(2, input):
        nextNum = num1 + num2 
        fibArray.append(nextNum)
        num1 = num2
        num2 = nextNum
    
    return fibArray

print("Non-recursive fib: ", fib(8))

# recursive solution
def recFib(input):
    # base cases
    if input <= 0:
        return []
    elif input == 2:
        return [0, 1]
    else:
        # general case
        fibArray = recFib(input - 1)
        nextNum = fibArray[len(fibArray) - 1] + fibArray[len(fibArray) - 2]
        fibArray.append(nextNum)
        return fibArray
print("Rrecursive fib: ", recFib(8))