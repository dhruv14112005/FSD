#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3, 4, 5};
    int f= count(v.begin(), v.end(), 3);
    v.erase(v.begin() + 3); \\ it will erase the element at index 3
    v.pop_back(); \\ it will erase the last element
    v.push_back(6);
    v.insert(v.begin() + 3, 10);
    int i=find(v.begin(), v.end(), 3); \\ here i is an iterator but if there is no 3 then it will return size of vector
    for(auto x:v){
        cout<<x<<" ";\\ auto is used when we dont know the data type
    }
    reverse(v.begin(), v.end());
    int sum= accumulate(v.begin(), v.end(), 0); \\ 0 is the initial value of sum
    int max= *max_element(v.begin(), v.end());
    int min= *min_element(v.begin(), v.end());
    sort(v.begin(), v.end(),less<int>()); \\ for descending order use greater<int>()
    sort(v.begin(), v.end(),greater<int>());
    vector<int> v2(v.begin()+2, v.begin()+5); \\ last element is not included



}