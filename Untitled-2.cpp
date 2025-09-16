#include <bits/stdc++.h>
using namespace std;

int main() {
    int n,k;
    cin>>n;
    cin>>k;
    int arr[n];
    for(int i; i<n; i++){
        cin>>arr[i];
    }
    int j;
    for(int i=0;i<n;i+=2*k){
        for(j=i;j<i+k;j++){
            int temp;
            temp=arr[j];
            arr[j]=arr[j+k];
            arr[j+k]=temp;
        }
    }
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}
