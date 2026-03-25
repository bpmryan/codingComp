# non-recursive function 
def fib(input): 
    if input <= 0: 
        return [] 
    if input == 1: 
        return [0]
    
    fibArray = [0, 1]
    num1 = 0
    num2 = 1

    for i in range(2, input):
        nextNum = num1 + num2 
        fibArray.append(nextNum)
        num1 = num2
        num2 = nextNum
    
    return fibArray

print(fib(8))