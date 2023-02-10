package org.example;
import java.util.Scanner;

public class _8 {
    public static Integer factorial(Integer num){
        Integer f = 1;

        for(Integer i = 1; i <= num; i++){
            f *= i;
        }

        return f;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Integer a = sc.nextInt();

        System.out.println("Factorial: " + factorial(a));
    }
}
