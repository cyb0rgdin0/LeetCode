class Solution {
    public static int[] twoSum(int[] nums, int target) {
        int[] x = new int[2];
        for (int i = 0; i < nums.length; i++)
        {
            for (int j = i + 1; j < nums.length; j++) 
            {
                if(nums[i] + nums[j] == target)
                {
                    x[0] = i;
                    x[1] = j;
                }
            }
        }
        return x;
    }

    public static void main(String[] args)
    {
        int nums[] = {3, 2, 4};
        int target = 6;
        
    }
}