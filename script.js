//1
const originalNumbers = [2, 4, 6, 8, 10];

const array = originalNumbers.map((x) => x * 2);

console.log(array)

//2

const originalWords = ['apple', 'banana', 'cherry'];

const array1 = originalWords.map(element => {
    return element.toUpperCase()

}
    
    )

console.log(array1)

//3

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
    ];

const users_name = users.map(element => {
    return element.name
})

console.log(users_name)

//4 

const originalNumbers1 = [4, 9, 16, 25];

const root = originalNumbers1.map(element => {
    return Math.sqrt(element)
})

console.log(root)

//5

const temperaturesInCelsius = [25, 30, 15, 20];

const temperaturesferenhait = temperaturesInCelsius.map(element => {
    const farenheit = (element * 1.8) + 32
    return farenheit
})

console.log(temperaturesferenhait)

//6

const originalNumbers3 = [1, 2, 3, 4, 5];

const evennumbers = originalNumbers3.map(element => {
    if (element % 2==0){
        const square = element * element
        return square

    }
    else{
        return element
    }

    
})

console.log(evennumbers)

//7

const rectangles = [
    { width: 3, height: 5 },
    { width: 4, height: 8 },
    { width: 2, height: 6 }
    ];

const area = rectangles.map(element => {
    const arearectangle = element.width * element.height
    return arearectangle
})

console.log(area)

//8

const names = ['John Doe', 'Alice Smith', 'Bob Johnson'];

const inicial = names.map(element => {
    const [first_name, last_name] = element.split(' ')

    return first_name.charAt(0) + last_name.charAt(0)
})

console.log(inicial)