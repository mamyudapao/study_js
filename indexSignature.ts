interface StringArray {
  [index: number]: string
}

const myArray: StringArray = {
  1: "aaaa"
}
const secondItem = myArray[1]
console.log(secondItem)