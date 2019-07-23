array=[1,7,9,4,5,6];

function swap(array,i,j)
{
    var temp=array[i];
    array[i]=array[j];
    array[j]=temp;
}

function bubblesort(array)
{
    var countOuter=0;
    var countInner=0;
    var countSwap;


    for(var i=0; i<array.length; i++){
        countOuter++
        for(var j=1; j<array.length; j++){
            countInner++;
            if(array[j-1]>array[j]){
                countSwap++;
                swap(array,j-1,j);
            }

        }
    }
    console.log("Outer: "+ countOuter);
    console.log("Outer: "+ countInner);
    console.log("Swap: "+ countSwap);

    return array;
}

console.log(bubblesort(array));