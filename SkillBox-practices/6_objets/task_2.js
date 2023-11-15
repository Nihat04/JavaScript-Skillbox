function filter(arr, propertyName, valueToFind) {
    return arr.filter(user => user[propertyName] === valueToFind)
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]
    
let result = filter(objects, 'name', 'Иван');
console.log(result);