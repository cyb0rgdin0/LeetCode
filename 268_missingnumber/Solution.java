import java.util.*;
import java.util.Arrays;

public class Solution {
    public static void main(String[] args)
    {
        int nums[] = {0, 7, 1, 3, 5, 4, 6};
        int x = missingNumber(nums);
        System.out.println(x);
    }
    public static int missingNumber(int[] nums) {
        int n = nums.length;
        
        // Using a map to check for the key value
        // Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        // for (int i = 0; i < n; i++)
        // {
        //     map.put(nums[i], i);
        // }
        // for (int i = 0; i <= n; i++)
        // {
        //     if (!map.containsKey(i))
        //     {
        //         return i;
        //     }
        // }
        // return -1;

        //==============================
        // Using XOR to get results
        // int result = 0;
        // for (int i = 0; i < n; i++)
        // {
        //     result ^= nums[i] ^ (i + 1);
        // }
        // return result;

        /*
        result = 0
        0 ^ (0 ^ 1) -> 0 ^ 1 -> 1
        1 ^ (7 ^ 2) -> 1 ^ 5 -> 4
        4 ^ (1 ^ 3) -> 4 ^ 2 -> 6
        6 ^ (3 ^ 4) -> 6 ^ 7 -> 1
        1 ^ (5 ^ 5) -> 1 ^ 0 -> 1
        1 ^ (4 ^ 6) -> 1 ^ 2 -> 3
        3 ^ (6 ^ 7) -> 3 ^ 1 -> 2
         */

        //==============================
        // Sort array and then find indexes that aren't equal using for loop
        // Return size of array if the end of the loop is reached
        // Arrays.sort(nums);
        // for (int i = 0; i < n; i++)
        // {
        //     if(i != nums[i])
        //     {
        //         return i;
        //     }
        // }
        // return n;

        //==============================
        // Find sum of length of array 
        // subtract all elements from sum
        int sum = (n * (n + 1)) / 2;
        for(int x: nums)
        {
            sum -= x;
        }
        return sum;
    }
}