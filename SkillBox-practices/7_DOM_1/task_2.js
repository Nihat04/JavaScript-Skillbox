function createStudentCard(student) {
    let div = document.createElement('div');
    let nameHeader = document.createElement('h2');
    let ageSpan = document.createElement('span');
    
    nameHeader.textContent = student.name;
    ageSpan.textContent = `Возраст: ${student.age} лет`

    div.append(nameHeader);
    div.append(ageSpan);
    document.body.append(div)
}

let studentObj={
    name: 'Игорь',
    age: 17
   }
createStudentCard(studentObj)