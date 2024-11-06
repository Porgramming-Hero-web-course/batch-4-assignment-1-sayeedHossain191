{
    // Problem 1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    const sumArray = (arr: number[]): number => {
        let sum = 0
        arr.forEach(item => {
            sum = sum + item
        })
        return sum
    }
    const arrayResult = sumArray([1, 2, 3, 4, 5]);

    console.log(arrayResult)
}

