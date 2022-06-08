class Solution {
    public static int strStr(String haystack, String needle) {
        if (needle.length() > haystack.length())
        {
	        return -1;
	    }
	    for (int i = 0; i <=  haystack.length() - needle.length(); i++)
        {
            if (haystack.charAt(i) == needle.charAt(0))
            {
                boolean isFound = true;
                int index = 0;
                for (int j = i; j < i + needle.length(); j++)
                {
                    if (haystack.charAt(j) != needle.charAt(index))
                    {
                        isFound = false;
                        break;
                    }
                    index++;
                }
                if (isFound) return i;
            }
        }
        return -1;
    }
    public static void main(String[] args)
    {
        String haystack = "hello";
        String needle = "ll";
        int n = strStr(haystack, needle);
        System.out.println(n);
    }
}

/*
8 vs 4 letters
0 1 2 3 4 5 6 7

*/