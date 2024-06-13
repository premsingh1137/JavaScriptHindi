const accountId =123456
let accountEmail = "prem.kachhawa@gmail.com"
var accountPassword = "987654"
accountCity = "Mumbai"

//accountId = 456789 this is not allowed
accountEmail = "kachhawa@gmail.com"
accountPassword = "123456"
accountCity = "Pune"

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table({accountId,accountEmail,accountPassword,accountCity})