package org.example;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class _6Test {

    @Test
    void main() {
        List<Integer> res = new ArrayList<>(Arrays.asList(1,1,2,3,5,8,13,21,34,55));
        assertEquals(res, _6.fibonacciOfTen());
    }
}