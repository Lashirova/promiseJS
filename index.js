
const promise = new Promise((resolve, reject)=> {
  resolve(1);
  resolve(2);
  resolve(3);
  reject(3);
});
promise
.then(console.log);