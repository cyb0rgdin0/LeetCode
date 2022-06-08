import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> l1 = new ArrayList<>();
        if (nums.length < 3) return l1;
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 2; i++)
        {
            for (int j = i + 1; j < nums.length - 1; j++)
            {
                for (int k = j + 1; k < nums.length; k++)
                {
                    if (nums[i] + nums[j] + nums[k] == 0)
                    {
                        List<Integer> l2 = new ArrayList<>();
                        l2.add(nums[i]);
                        l2.add(nums[j]);
                        l2.add(nums[k]);
                        l1.add(l2);
                    }
                } 
            }
        }
        return null;
    }

    public static void main(String[] args) {
        int[] nums = {-1,0,1,2,-1,-4};
        String s = Arrays.toString(nums);
        System.out.println(s);

    }
}