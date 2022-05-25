public class solution 
{
    public static void main(String[] args)
    {
        int[] a = {5,4,3,2,1};
        int[] b = nextGreaterElements(a);

        for (int i = 0; i < a.length; i++)
        {
            System.out.print(a[i] + " ");
        }
        System.out.println();
        for (int i = 0; i < b.length; i++)
        { 
            System.out.print(b[i] + " ");
        }
        System.out.println();
    }

    public static int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        int[] array = new int[n];
        for (int i = 0; i < n; i++)
        {
            array[i] = -1;
            int j = i;
            do {
                if (nums[j] > nums[i])
                {
                    array[i] = nums[j];
                    break;
                }

                j++;
                if (j == n)
                {
                   j = 0; 
                }
            } while (j != i);
        }
        return array;
    }
}