const accountId = 155321
let accountEmail = "tempmail@gmail.com"
var accountPassword = "12345"
accountCity = "Thane"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId)

// Prefer not to use var
// because of issue in block scope and functional scope

console.table([accountId,accountEmail,accountPassword,accountCity])