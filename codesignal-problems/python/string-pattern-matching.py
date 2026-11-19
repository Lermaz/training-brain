vowels = ['a', 'e', 'i', 'o', 'u', 'y'] 

# def check_for_pattern(pattern, source, start_index):
#    for offset in range(len(pattern)):
#        if pattern[offset] == '0':
#            if source[start_index + offset] not in vowels:
#                return 0
#        else:
#            if source[start_index + offset] in vowels:
#                return 0
#    return 1

# def solution(pattern, source):
#    matches = 0
#    for start_index in range(len(source) - len(pattern) + 1):
#        matches += check_for_pattern(pattern, source, start_index)
#    return matches

def solution(pattern, source):
    matches = 0

    for source_index in range(len(source) - len(pattern) + 1):
        ok = True

        for pattern_index in range(len(pattern)):
            is_vowel = source[source_index + pattern_index] in vowels
            if (pattern[pattern_index] == "0") != is_vowel:
                ok = False
                break


        if ok:
            matches += 1

    return matches

pattern = "010"
source = "amazing"
print("Result:", solution(pattern, source))