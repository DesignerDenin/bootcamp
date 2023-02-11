package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class _5Test {

    @Test
    void main() {
        assertEquals(true, _5.isPrime(13));
        assertEquals(false, _5.isPrime(14));
    }
}