const os = require('os');
//think about modules like packages
//info about cur user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in sec
console.log(`The sys Uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);
