function first(arr, n){
    if(n !== 1){
        numbersCopy=[];
        for(i=0;i<n||i<arr.length;i++){
            numbersCopy[i] = arr[i];
        }
        return numbersCopy;
    }
    else{
        return arr[1];
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
