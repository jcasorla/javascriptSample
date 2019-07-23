
var temp;
function reverseArr(arr)
{
    var n=arr.length;
    for(var i=0; i<n/2; i++){
        temp=arr[i];
        arr[i]=arr[n-i-1];
        arr[n-i-1]=temp;

    }
    return arr;
}

arr=[1,2,3,4,5,6];

console.log(reverseArr(arr));

arr2=[1,2,3,4,5,6];
arr2.reverse();
console.log(arr);



