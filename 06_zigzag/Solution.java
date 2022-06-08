public class Solution {
    public static void main(String[] args)
    {
        String s = "PAYPALISHIRING";
        String zigzag = convert(s, 5);
        System.out.println(s);
        System.out.println(zigzag);
    }
    public static String convert(String s, int numRows) {
        if (numRows == 1)
            return s;
        String st = "";
        int n = s.length();
        int length = 2 * numRows - 2;

        for (int i = 0; i < numRows; i++)
        // iterate through rows
        {
            for (int j = 0; j + i < n; j += length)
            {
                st += s.charAt(j + i);
                if (i != 0 &&  i != numRows - 1 && j + length - i < n)
                    st += s.charAt(j + length - i);
            }
        }
        return st;
    }
}

// PAYPALISHIRING
// P     I    N         
// A   L S  I G
// Y A   H R
// P     I
// PINALSIGYAHRPI

// Example zig zag string
// numRows = 4