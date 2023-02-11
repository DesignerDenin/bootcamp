package org.example;
import java.util.Scanner;
import java.util.*;
public class _6 {
    public static List<Integer> fibonacciOfTen() {
        List<Integer> res = new ArrayList<>();
        res.add(1);
        res.add(1);

        for(int i=2; i < 10; i++){
            res.add(res.get(i - 1) + res.get(i - 2));
        }

        return res;
    }

    public static void main(String[] args) {
        System.out.print(fibonacciOfTen());
    }
}
