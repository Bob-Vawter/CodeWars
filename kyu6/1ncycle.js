//kyu 6

function cycle(n)
{
    if (n % 2 == 0 || n % 5 == 0){return -1;}
    var res = 10 % n, count = 1;

    while (res != 1)
    {
        res = res * 10 % n;
        count++;
    }
    return count;
}