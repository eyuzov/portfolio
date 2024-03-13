/**
 * В этом задании необходимо реализовать функцию parallel, которая выполняет асинхронные операции параллельно.
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
  var promises = [];

  operations.forEach(operation => {
    let promise = new Promise(function (resolve, reject) {

      let next = function (err, ms) {
        if (err !== null) {
          reject(err);
        } else {
          resolve(ms);
        }
      };
      operation(next);
    });

    promises.push(promise);
  });


  Promise.all(promises)
    .then((res)=>{
      callback(null, res)
    })
    .catch((err)=>{
      callback(err)
    })

};