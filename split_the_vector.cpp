#include <bits/stdc++.h>
using namespace std;

int main() {
    int k;
    cin >> k;
    vector<int> a(k);
    for(int &num:a){
        cin >> num;
    }
    int m=*max_element(a.begin(),a.end());
    int n=*min_element(a.begin(),a.end());
    int n_idx=find(a.begin(),a.end(),n)-a.begin();
    int m_idx=find(a.begin(),a.end(),m)-a.begin();
    int left=min(n_idx,m_idx);
    int right=max(n_idx,m_idx);
    vector<int>first(a.begin(),a.begin()+left);
    vector<int>second(a.begin()+left,a.begin()+right+18);
    vector<int>third(a.begin()+right+1,a.end());
    vector<int> ans;
    ans.insert(ans.end(),second.begin(),second.end());
    ans.insert(ans.end(),first.begin(),first.end());
    ans.insert(ans.end(),third.begin(),third.end());
    for(int num:ans){
        cout << num << " ";
    }
    return 0;
}
