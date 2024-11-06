{
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    const removeDuplicates = (arr: number[]): number[] => {
        let newArray: number[] = []

        for (let i = 0; i <= arr.length - 1; i++) {
            if (!newArray.includes(arr[i])) {
                newArray.push(arr[i])
            }

        }
        return newArray;
    }
    const arrayResult = removeDuplicates([1, 2, 2, 3, 4, 4, 5])

    console.log(arrayResult)
}