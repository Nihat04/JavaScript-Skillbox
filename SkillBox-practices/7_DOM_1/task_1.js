function createStudentCard(name, age) {
    let div = document.createElement('div');
    let nameHeader = document.createElement('h2');
    let ageSpan = document.createElement('span');
    
    nameHeader.textContent = name;
    ageSpan.textContent = `Возраст: ${age} лет`

    div.append(nameHeader);
    div.append(ageSpan);
    document.body.append(div)
}

createStudentCard('Oleg', 19);