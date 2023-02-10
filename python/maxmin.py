class NumArray:
    values = []

    def __init__(self, numArr):
        self.values = numArr
    
    def arrMax(self):
        return max(self.values)

    def arrMin(self):
        return min(self.values)

temp = input()
numArr = NumArray(temp.split())
print("Max: ", numArr.arrMax())
print("Min: ", numArr.arrMin())