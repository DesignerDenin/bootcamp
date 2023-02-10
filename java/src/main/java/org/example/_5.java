package org.example;
import java.util.Scanner;

public class _5 {
    public static Boolean isPrime(Integer a) {
        Boolean isPrime = true;

        for(Integer i = 2; i<a/2; i++){
            if (a%i == 0)
                isPrime = false;
        }

        return isPrime;
    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        Integer a = sc.nextInt();

        System.out.println(isPrime(a));
    }
}
