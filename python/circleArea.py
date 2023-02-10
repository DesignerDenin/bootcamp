class Circle:
    def __init__(self, side):
        self.side = side
    
    def area(self):
        return 22/7.0 * self.side * self.side

s = int(input())
c = Circle(s)
print(c.area())
