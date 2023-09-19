const os = require('os');
// console.log(os.userInfo());
const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMeme : os.totalmem(),
    freememe : os.freemem()
}
console.log(currentOs);
