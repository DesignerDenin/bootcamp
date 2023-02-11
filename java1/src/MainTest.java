import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

class MainTest {
    private List<Integer> myList;
    private HashSet<Double> mySet;

    @org.junit.jupiter.api.BeforeEach
    void setUp() {
        myList = new ArrayList<>();
        mySet = new HashSet<Double>();
    }

    @org.junit.jupiter.api.AfterEach
    void tearDown() {
    }

    @org.junit.jupiter.api.Test
    void testListStream() {
        List<Integer> integers = List.of(1,2,3,4,5);

        for (var i: integers){
            System.out.print(i + " ");
        }

        integers.stream()
                .filter((i) -> i%2 == 0)
                .map((i) -> i/2)
                .forEach((i) -> System.out.print(" M" + i));

        assertEquals(5, integers.size());

    }


}