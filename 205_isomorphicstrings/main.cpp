#include <iostream>
#include <iterator>
#include <map>
#include <unordered_map>
using namespace std;

bool isIsomorphic(string s, string t) {
    unordered_map<char, char> map_s;
    unordered_map<char, char> map_t;
    
    for (int i = 0; i < s.length(); i++)
    {
        if (map_s.find(s[i]) != map_t.end() && map_s[s[i]] != t[i])
            return false;
        if (map_t.find(t[i]) != map_s.end() && map_t[t[i]] != s[i])
            return false;
        map_s[s[i]] = t[i];
        map_t[t[i]] = s[i];
    }
    return true;

    // for (int i = 0; i < s.length(); i++)
    // {
    //     for (int j = 0; j < s.length(); j++)
    //     {
    //         if (s[i] == s[j] && t[i] != t[j])
    //             return false;
    //         if (t[i] == t[j] && s[i] != s[j])
    //             return false;
    //     }
    // }
    // return true;
}

int main()
{
    string s = "egg";
    string t = "add";
    bool check = isIsomorphic(s, t);
    cout << check << endl;
}

/*
Create 2 maps for each string
Iterate through each element in a loop
----
First check if there is already a letter in the map
    Because if you assign the letter first then everything will be assumed to be correct
If there is a letter-> if the map key value is not equal to the value of the corresponding value then return false

----
*/