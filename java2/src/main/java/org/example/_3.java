package org.example;
import java.util.Scanner;

public class _3 {
    public static String reverse(String str){
        StringBuilder strb = new StringBuilder();
        strb.append(str);
        strb.reverse();
        return strb.toString();
    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();

        System.out.println("Reverse: " + reverse(str));

    }
}
