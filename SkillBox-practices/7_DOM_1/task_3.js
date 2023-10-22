function createStudentsList(listArr) {
    let ul = document.createElement('ul');
    document.body.append(ul);

    for(let student of listArr) {
        let header = document.createElement('h2');
        header.textContent = student.name;

        let span = document.createElement('span');
        span.textContent = `Возраст: ${student.age} лет`;

        let li = document.createElement('li');
        li.append(header);
        li.append(span);

        ul.append(li);
    }
}

let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

createStudentsList(allStudents);