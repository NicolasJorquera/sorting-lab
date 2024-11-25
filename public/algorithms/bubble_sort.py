import time

def bubble_sort(array):
    start_time = time.perf_counter()
     
    n = len(array)
    # Loop for each element of the array
    for i in range(n):
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            # traverse the array from 0 to n-i-1
            # Swap if the element found is greater
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
                
    end_time = time.perf_counter()
    
    elapsed_time = round((end_time - start_time) * 1000, 50)
    print(f"Bubble sort took {elapsed_time} milliseconds")
    
    
    return array, elapsed_time
