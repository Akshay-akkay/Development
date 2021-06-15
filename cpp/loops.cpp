#include <iostream>
using namespace std;

int main()
{

    // #ifndef ONLINE_JUDGE
    //     // not part of code, just to take input from ./input.txt and paste output in ./output.txt
    //     freopen("input.txt", "r", stdin);
    //     freopen("output.txt", "w", stdout);
    // #endif

    // #1

    int sum = 0;
    for (int i = 1; i <= 5; i++)
    {

        sum += i;
        cout << "akkay\n";
    }
    cout << sum << endl;

    // #2

    int n;
    cin >> n;

    while (n > 0)
    {
        cout << &n << endl;
        cin >> n;
    }

    // #3

    int n2;
    cin >> n2;

    do
    {

        cout << n << endl;
        cin >> n;
    } while (n > 0);

    return 0;
}