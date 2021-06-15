#include <iostream>
using namespace std;

int main()
{

#ifndef ONLINE_JUDGE
    // not part of code, just to take input from ./input.txt and paste output in ./output.txt
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif

    cout << "Hello World!!!\n";

    int ascii = 'a';
    cout << ascii << endl;

    int amt1;
    int amt2;
    cin >> amt1;
    cin >> amt2;
    int sum = amt1 + amt2;
    cout << sum << endl;

    return 0;
}