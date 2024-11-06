{
    // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

    const countWordOccurrences = (str1: string, str2: string): number => {
        const sentenceType = str1.toLowerCase().split(' ')
        const wordType = str2.toLowerCase()

        let count = 0
        for (let i = 0; i <= sentenceType.length - 1; i++) {
            if (wordType.includes(sentenceType[i])) {
                count++
            }
        }
        return count;
    }

    const arrayResult = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

    console.log(arrayResult)
}