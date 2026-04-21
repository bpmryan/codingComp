package ja;

import java.util.Arrays;

public class recursion {
    public static void main(String[] args) {
        // change fib() input to change output
        System.out.println("Non-recursive fib: " + Arrays.toString(fib(8)));
        System.out.println("Recursive fib: " + Arrays.toString(recFib(8)));
    }
    // non recursive fib function
    public static int[] fib(int input) {
        if(input <= 0) {
            return new int[0];
        }
        if(input == 1) {
            return new int[]{0};
        }

        int[] fibArray = new int[input];
        fibArray[0] = 0;
        fibArray[1] = 1;

        for (int i = 2; i < input; i++) {
            fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        }

        return fibArray;
    }
    // recursive fib function
    public static int[] recFib(int input){
        // base cases
        if(input <= 0) {
            return new int[0]; 
        }  
        if (input == 1) {
            return new int[]{0};
        }
        if (input == 2) {
            return new int[]{0, 1};
        }

        // general case
        int[] previousArray = recFib(input - 1);
        int[] currentArray = Arrays.copyOf(previousArray, input);
        currentArray[input - 1] = currentArray[input - 2] + currentArray[input - 3]; 

        return currentArray;
        
    }
}

