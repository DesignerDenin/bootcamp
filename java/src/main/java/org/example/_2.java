package org.example;
import java.util.Scanner;

public class _2 {
    public static int max(int a, int b, int c){
        return Math.max(a, Math.max(b,c));
    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        System.out.println("Max is " + max(a,b,c));
    }
}
