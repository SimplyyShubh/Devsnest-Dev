function array_Clone(numbers){
    numbersCopy = [];

    for (i = 0; i < numbers.length; i++) {
      numbersCopy[i] = numbers[i];
    }
    return (numbersCopy);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
