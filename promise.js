var url = 'https://my-json-server.typicode.com/typicode/demo/posts';
// create a promise
var promise = new Promise(function (resolve, reject) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      resolve(xhr.response);
    } else {
      reject(Error(xhr.statusText));
    }
  };
  xhr.onerror = function () {
    reject(Error("Network Error"));
  };
  xhr.send();
});
// use the promise
promise.then(function (data) {
  console.log("Got data! Promise fulfilled.");
  console.log(data);
}, function (error) {
  console.log("Promise rejected.");
  console.log(error.message);
});