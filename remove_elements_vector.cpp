#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>> n;
    vector<int> v(n);
    for(int &num:v){
        cin>>num;
    }
    int f=count(v.begin(), v.end(), 1);
    v.erase(v.begin()+f);
    for(int num:v){
        cout<<num<<" ";
    }
}
