package org.example;
import java.util.Arrays;
import java.util.Scanner;

public class _7 {
    public static Boolean anagram(String a, String b){
        char[] aArr = a.toCharArray();
        char[] bArr = b.toCharArray();

        Arrays.sort(aArr);
        Arrays.sort(bArr);

        return Arrays.equals(aArr, bArr);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();
        String b = sc.nextLine();
        System.out.println(anagram(a,b));
    }
}
