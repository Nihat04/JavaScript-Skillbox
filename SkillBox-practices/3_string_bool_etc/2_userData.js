function UserDataConvert(userName, userSurname) {
    let nameFirstLetter = userName[0].toUpperCase()
    let nameOtherLetters = userName.substring(1).toLowerCase()
    let converterName = nameFirstLetter + nameOtherLetters

    let surnameFirstLetter = userSurname[0].toUpperCase()
    let surnameOtherLetters = userSurname.substring(1).toLowerCase()
    converterSurname = surnameFirstLetter + surnameOtherLetters

    console.log(
        userName === converterName ? 'Имя осталось без изменени' : 'Имя было преобразовано',
        userSurname === converterSurname ? '\nФамилия осталась без изменени' : '\nФамилия была преобразована'
    )
}

UserDataConvert('Alex', 'Deyn');