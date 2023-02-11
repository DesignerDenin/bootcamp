package org.example;
import java.util.Scanner;

public class _1 {
    public static int add(int a, int b){
        return a + b;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Integer a = sc.nextInt();
        Integer b = sc.nextInt();
        Integer sum = add(a,b);

        System.out.println("Sum is " + sum);
    }
}