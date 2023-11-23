// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).

// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

const studentsList = [
  {
    name: "Денис",
    surname: "Пупкин",
    middleName: "Алексеевич",
    birthday: new Date(2000, 5 - 1, 5),
    startStudyingYear: "2020",
    faculty: "Engeneer",
  },
  {
    name: "Андрей",
    surname: "Василий",
    middleName: "Георгий",
    birthday: new Date(2001, 8, 15),
    startStudyingYear: "2019",
    faculty: "Астронавт",
  },
  {
    name: "Санёк",
    surname: "Удачник",
    middleName: "Александрович",
    birthday: new Date(2000, 11, 30),
    startStudyingYear: "2022",
    faculty: "Филолог",
  },
  {
    name: "Санёк",
    surname: "Удачник",
    middleName: "Александрович",
    birthday: new Date(2000, 11, 30),
    startStudyingYear: "2021",
    faculty: "A",
  },
  {
    name: "Санёк",
    surname: "Удачник",
    middleName: "Александрович",
    birthday: new Date(2000, 11, 30),
    startStudyingYear: "2022",
    faculty: "B",
  },
  {
    name: "Санёк",
    surname: "Удачник",
    middleName: "Александрович",
    birthday: new Date(2000, 11, 30),
    startStudyingYear: "2022",
    faculty: "C",
  },
];

// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.

function getStudentItem(studentObj) {
  let studentItem = document.createElement("tr");
  let studentName = document.createElement("td");
  let age = document.createElement("td");
  let yearsOfStudying = document.createElement("td");
  let faculty = document.createElement("td");

  studentName.textContent = getStudentName(studentObj);
  age.textContent = getStudentAge(studentObj.birthday);
  yearsOfStudying.textContent = getStudyingYears(
    parseInt(studentObj.startStudyingYear)
  );
  faculty.textContent = studentObj.faculty;

  studentItem.append(studentName, age, yearsOfStudying, faculty);
  return studentItem;
}

function getStudentName(studentObj) {
  return `${studentObj.surname} ${studentObj.name} ${studentObj.middleName}`;
}

function getStudyingYears(startStudyingYear) {
  let today = new Date();
  let currentCourse =
    today.getFullYear() -
    startStudyingYear +
    (today.getMonth() + 1 >= 9 ? 1 : 0);
  if (currentCourse > 4) currentCourse = "закончил";
  return `${startStudyingYear}-${startStudyingYear + 4} (${currentCourse})`;
}

function getStudentAge(birthday) {
  let day = birthday.getDate();
  let month = birthday.getMonth() + 1;
  let year = birthday.getFullYear();

  let today = new Date();
  let monthDiff = today.getMonth() - birthday.getMonth();
  let fullYears = today.getFullYear() - year;
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < day)) {
    fullYears--;
  }

  return `${day}.${month}.${year} (${fullYears})`;
}

// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.

function renderStudentsTable(studentsArray) {
  let tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  for (let i = 0; i < studentsArray.length; i++) {
    let studentItem = getStudentItem(studentsArray[i]);
    tableBody.append(studentItem);
  }
}

// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.

const confirmBtn = document.getElementById("confirm-stud-btn");
confirmBtn.addEventListener("click", () => {
  let studentObj = {};
  let errorMsg = document.getElementById("error-msg");

  let studName = document.getElementById("name");
  let studSurname = document.getElementById("surname");
  let studMiddleName = document.getElementById("middle-name");
  let studFaculty = document.getElementById("faculty");
  let birthdayDate = document.getElementById("birthday");
  let startStudYear = document.getElementById("year-studying");

  let minBirthday = new Date(1900, 0, 1);
  let today = new Date();

  if (
    studName.value.trim() === "" ||
    studSurname.value.trim() === "" ||
    studMiddleName.value.trim() === ""
  ) {
    errorMsg.textContent = "Неверное ФИО";
    return;
  } else if (
    !birthdayDate.valueAsDate ||
    birthdayDate.valueAsDate - minBirthday < 0
  ) {
    errorMsg.textContent = "Неверная дата";
    return;
  } else if (studFaculty.value.trim() === "") {
    errorMsg.textContent = "Неверный факультет";
    return;
  } else if (
    parseInt(startStudYear.value) < 2000 ||
    parseInt(startStudYear.value) > parseInt(today.getFullYear()) ||
    !parseInt(startStudYear.value)
  ) {
    errorMsg.textContent = "Неверный год начала обучения";
    return;
  }

  studentObj.name = studName.value.trim();
  studentObj.surname = studSurname.value.trim();
  studentObj.middleName = studMiddleName.value.trim();
  studentObj.faculty = studFaculty.value.trim();
  studentObj.birthday = birthdayDate.valueAsDate;
  studentObj.startStudyingYear = parseInt(startStudYear.value);

  studName.value = "";
  studSurname.value = "";
  studMiddleName.value = "";
  studFaculty.value = "";
  birthdayDate.value = "";
  startStudYear.value = "";

  studentsList.push(studentObj);
  renderStudentsTable(studentsList);
});

// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

function sortStudents(propertyName, studentsArray) {
  let sortedArr = studentsArray.sort((a, b) => {
    if (typeof a[propertyName] === "string") {
      if (propertyName === "name") {
        let aName = getStudentName(a);
        let bName = getStudentName(b);
        return aName.localeCompare(bName);
      }

      return a[propertyName].localeCompare(b[propertyName]);
    }

    return a[propertyName] - b[propertyName];
  });

  renderStudentsTable(sortedArr);
}

document.getElementById("th-name").addEventListener("click", () => {
  sortStudents("name", studentsList);
});

document.getElementById("th-birthday").addEventListener("click", () => {
  sortStudents("birthday", studentsList);
});

document.getElementById("th-stud-year").addEventListener("click", () => {
  sortStudents("startStudyingYear", studentsList);
});

document.getElementById("th-faculty").addEventListener("click", () => {
  sortStudents("faculty", studentsList);
});

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.

function filterStudents(infoToFind, propertyName, studentsArray) {
  let filteredArr = studentsArray.filter((student) => {

    switch (propertyName) {
      case 'name':
        let fullName = getStudentName(student);
        return fullName.includes(infoToFind);

      case 'birthday':
        let birthday = getStudentAge(student.birthday);
        return birthday.includes(infoToFind);

      case 'startStudyingYear':
        let studYear = getStudyingYears(student.startStudyingYear);
        return studYear.includes(infoToFind);
      
      default:
        return student[propertyName].toString().includes(infoToFind);
    }
  });

  renderStudentsTable(filteredArr)
}

let searchName = document.getElementById("search-name");
searchName.addEventListener("input", () => {
  filterStudents(searchName.value, "name", studentsList);
});

let searchBirthday = document.getElementById("search-birthday");
searchBirthday.addEventListener("input", () => {
  filterStudents(searchBirthday.value, "birthday", studentsList);
});

let searchStudYear = document.getElementById("search-stud-year");
searchStudYear.addEventListener("input", () => {
  filterStudents(searchStudYear.value, "startStudyingYear", studentsList);
});

let searchFaculty = document.getElementById("search-faculty");
searchFaculty.addEventListener("input", () => {
  filterStudents(searchFaculty.value, "faculty", studentsList);
});
