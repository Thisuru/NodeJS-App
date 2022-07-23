const os = require('os')

//info about current user
const currentUser = os.userInfo()
console.log(currentUser); 

//method returens the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);