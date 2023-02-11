package org.example;
import java.util.*;

public class _10 {
    public static List<Integer> divisors(Integer a){
        List<Integer> res = new ArrayList<>();
        for(Integer i = 2; i<=a/2; i++){
            if (a%i == 0)
                res.add(i);
        }

        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Integer a = sc.nextInt();

        System.out.println(divisors(a));
    }
}
