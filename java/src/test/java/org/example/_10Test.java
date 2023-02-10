package org.example;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

class _10Test {

    @Test
    void main() {
        List<Integer> res = new ArrayList<>(Arrays.asList(2,3,4,6));
        assertEquals(res,_10.divisors(12));
    }
}