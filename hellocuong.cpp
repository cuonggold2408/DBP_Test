#include <bits/stdc++.h>
using namespace std;
#define ll long long

int main(){
    int n; cin >> n;
    cin.ignore();
    vector<string> v;
    string s;
    stringstream ss(s);
    string t;
    while(ss >> t){
        cout << t << " ";
        v.push_back(t);
    }
    for(auto x : v){
        cout << x << " ";
    }
}