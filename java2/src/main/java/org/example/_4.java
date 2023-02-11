package org.example;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;

public class _4 {
    public static int vowelCount(String str){
        int count = 0;
        for (char ch: str.toCharArray()){
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch =='u')
                count += 1;
        }

        return count;
    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();

        System.out.println("Vowel Count: " + vowelCount(str));
    }
}
