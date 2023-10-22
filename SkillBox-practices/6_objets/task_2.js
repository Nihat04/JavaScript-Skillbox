function filter(arr, propertyName, valueToFind) {
    newArr = [];

    for(let el of arr) {
        if(Object.keys(el).includes(propertyName) && el[propertyName] === valueToFind) {
            newArr.push(el);
        }
    }
    return newArr
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]
    
let result = filter(objects, 'name', 'Иван');