public class Solution {
    public static void main(String[] args)
    {
        String jewels = "aA";
        String stones = "aAAbbbb";
        int count = numJewelsInStones(jewels, stones);
        System.out.println("There are " + count + " stones that are also jewels.");
    }
    public static int numJewelsInStones(String jewels, String stones) {
        int count = 0;
        for (int i = 0; i < stones.length(); i++)
        {
            String s = "";
            s += stones.charAt(i);
            if (jewels.contains(s))
            {
                count++;
            }
        }
        return count;
    }
}