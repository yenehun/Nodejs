const os=require('os');
const { relative } = require('path/posix');
const user=os.userInfo();
console.log(user);

console.log(`The system uptime is ${os.uptime()/3600} seconds`);


const currentOs={
    name:os.type(),
   release: os.release(),
totalmem:os.totalmem(),
freemem:os.freemem()
};
console.log(currentOs);


