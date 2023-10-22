function IsPasswordSecure(password) {
    if(password.length >= 4 && (password.includes('-') || password.includes('_'))) {
        console.log('Пароль надёжный')
    }
    else {
        console.log('Пароль недостаточно надёжный')
    }
}

IsPasswordSecure('1234-')
IsPasswordSecure('4321_')
IsPasswordSecure('qaz-xsw')
IsPasswordSecure('12478-')
IsPasswordSecure('_zxd')

IsPasswordSecure('_-a')
IsPasswordSecure('qaz')
IsPasswordSecure('_-3')
IsPasswordSecure('123456789')



