from collections import defaultdict

def solution(numbers):
   counts = defaultdict(int)
   answer = 0
   for element in numbers:
       counts[element] += 1
       for two_power in range(21):
           second_element = (1 << two_power) - element
           answer += counts[second_element]
   return answer

numbers = [1, -1, 2, 3];
print("Result:", solution(numbers))