function getAge(birthYear) {
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    return currentYear - birthYear;
}

console.log(getAge(1998))
console.log(getAge(1991))
console.log(getAge(2007))

// Массив с почтовыми адресами:
let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
// Массив с почтовыми адресами в чёрном списке:
let blackList = ['jsfunc@mail.ru','goodday@day.ru']
// Вызов созданной функции:

function filter(whiteList, blackList) {
    return whiteList.filter(email => !blackList.includes(email))
}

console.log(filter(whiteList, blackList))

function arrSort(array) {
    return array.sort();
}

console.log(arrSort([9,4,5,7,2,8,1,3,6]))