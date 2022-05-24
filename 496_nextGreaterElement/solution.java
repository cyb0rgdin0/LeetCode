public class solution 
{
    public static void main(String[] args)
    {
        int[] a = {4,1,2};
        int[] b = {1,3,4,2};
        int[] c = solution.nextGreaterElement(a, b);

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
        for (int i = 0; i < c.length; i++)
        {
            System.out.print(c[i] + " ");
        }
        System.out.println();
    }
    
    public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;
        int[] array = new int[m];
        for (int i = 0; i < m; i++)
        {
            int index = -1;
            // index is first set to -1
            for (int j = 0; j < n; j++)
            {
                if (nums1[i] == nums2[j])
                {
                    index = j;
                    break;
                }
            }
            if (index != -1)
            {
                int size = index;
                index = -1;
                for (int j = size; j < n; j++)
                {
                    if (nums2[j] > nums1[i])
                    {
                        index = nums2[j];
                        break;
                    }
                }
                // if no element greater than nums2[j] was found than index stays -1
            }
            array[i] = index;
        }
        return array;
    }
}