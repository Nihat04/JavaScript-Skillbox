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
    let allowedList = []
    for(const el of whiteList) {
        if (!(blackList.includes(el)))
            allowedList.push(el)
    }
    return allowedList
}

console.log(filter(whiteList, blackList))

function arrSort(array) {
    if (array.length < 2) 
        return array;

    let min = 1;
    let max = array.length - 1;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    let pivot = array[rand];
    
    const left = [];
    const right = [];
    array.splice(array.indexOf(pivot), 1);
    array = [pivot].concat(array);
    
    for (let i = 1; i < array.length; i++) {
      if (pivot > array[i]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    return arrSort(left).concat(pivot, arrSort(right));
}

console.log(arrSort([9,4,5,7,2,8,1,3,6]))