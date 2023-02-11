package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class _7Test {

    @Test
    void main() {
        assertEquals(true, _7.anagram("ate", "eat"));
        assertEquals(false, _7.anagram("tee", "eat"));
    }
}