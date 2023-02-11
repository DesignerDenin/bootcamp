/*
1. Read file and extract data
2. Create a counter map
3. Split the data into words. Iterate through them
4. If same text is found, increment counter
5. Print the counts of each text
*/

const { count } = require('console')
const fs = require('fs')

try{
    var counterMap = new Map()
    var data = fs.readFileSync(process.argv[2], 'utf8')
                .toString()
                .toLowerCase()
                .split("").filter((ch) => /[a-z1-9 ]/.test(ch)).join("")
                .split(" ")
    
    for (const text of data){
        if(counterMap.has(text)){
            counterMap.set(text, counterMap.get(text) + 1)
        } else {
            counterMap.set(text, 1)
        }
    }

    counterMapSorted = new Map([...counterMap.entries()].sort((a, b) => b[1] - a[1]));;

    for (const [text, count] of counterMapSorted){
        console.log(`${text}: ${count}`)
    }
} catch(e) {
    console.log(e)
}