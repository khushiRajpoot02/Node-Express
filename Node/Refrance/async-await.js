/*
Let's learn async await
*/
const {readFile, writeFile} = require('fs').promises;
// using promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path)=>{
//   return new Promise((resolve, reject)=>{
//     readFile(path,'utf8', (err, data)=>{
//       if(err){
//       reject(err);
//       }
//       else{
//         // console.log(data);
//         resolve(data);
//       }
//   })
//   })
// }
// getText('./content/first.txt').then((data)=>console.log(data)).catch((err)=>console.log(err));
//asymc await in promises
const start = async ()=>{
try{
  const first = await readFile('./content/first.txt' ,'utf8');
  const second = await readFile('./content/second.txt', 'utf8');
  await writeFile('./content/res-asynAwait-file.txt', 
    `This is awesom: ${first} ${second}`,
    {flag : 'a'}
  );
  console.log(first, second);
}
catch(err){
  console.log(err);
} 
}
start();

