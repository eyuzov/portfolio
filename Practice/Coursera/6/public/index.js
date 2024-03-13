// Телефонная книга
var phoneBook = {};
var book = {};
/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {

  var arr = command.split(" ");
  switch (arr[0]) {
    case "ADD":
      return add(arr);
    case "REMOVE_PHONE":
      return remove(arr);
    case "SHOW":
      return show();
  }

  function add(arr) {

    if (!book.hasOwnProperty(arr[1])) {
      book[arr[1]] = [].concat(arr[2].split(","));
    } else {
      book[arr[1]] = book[arr[1]].concat(arr[2].split(","));
    }
  }

  function remove(arr) {
    a = Object.keys(book);
    for (var i = 0; i < a.length; i++) {
      if (book[a[i]].indexOf(arr[1]) !== -1) {
        book[a[i]].splice(book[a[i]].indexOf(arr[1]), 1);
        return true;
      }
    }
    return false;
  }
};

function show() {
  arr = [];
  str = "";
  a = Object.keys(book);
  for (var i = 0; i < a.length; i++) {
    if (book[a[i]].length === 0) {
      continue;
    }
    str = a[i] + ": " + book[a[i]].join(", ");
    arr.push(str);
  }
  return arr.sort();
}

