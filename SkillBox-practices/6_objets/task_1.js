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
    let oldestUser = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i].age > oldestUser.age) {
            oldestUser = arr[i];
        }
    }
    return oldestUser.name;
}


console.log(getOlderUser(user1, user2));
console.log(getOlderUserArray(allUsers));