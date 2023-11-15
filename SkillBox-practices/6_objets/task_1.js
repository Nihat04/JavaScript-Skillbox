let user1 = {
    name: 'Игорь',
    age: 17
}

let user2 = {
    name: 'Оля',
    age: 21
}

function getOlderUser(user1, user2) {
    if(user1.age > user2.age) 
        return user1.name;
    return user2.name;
}

let allUsers = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

function getOlderUserArray(arr) {
    return arr.sort((a, b) => b.age - a.age)[0];
}


console.log(getOlderUser(user1, user2));
console.log(getOlderUserArray(allUsers));