#include <iostream>
using namespace std;

int main()
{

    // #ifndef ONLINE_JUDGE
    //     // not part of code, just to take input from ./input.txt and paste output in ./output.txt
    //     freopen("input.txt", "r", stdin);
    //     freopen("output.txt", "w", stdout);
    // #endif

    int a, b, c;

    cin >> a >> b >> c;

    if (a > b)
    {
        if (a > c)
        {
            cout << "a\n";
        }
        else

            if (c > b)
        {
            cout << "c\n";
        }
    }
    else if (b > c)
    {
        cout << "b\n";
    }
    else if (c > a)
    {
        cout << "c\n";
    }

    return 0;
}