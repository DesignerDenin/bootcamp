package org.example;
import java.util.Scanner;

public class _9 {
    public static String replacer(String a){
        return a.replaceAll("[aeiou]", "*");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();
        System.out.println(replacer(a));
    }
}
