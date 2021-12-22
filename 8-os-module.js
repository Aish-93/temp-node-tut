const os = require('os')

//info about the current user 
const userInfo = os.userInfo();
console.log(userInfo);

// system runtime in seconds 
console.log(`The system uptime is ${os.uptime()} in seconds `)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS);