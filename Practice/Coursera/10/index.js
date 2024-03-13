module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
  this.items = [];
}


// Методы коллекции
Collection.prototype.append = function (item) {

  if (item instanceof Array) {
    this.items.push(...item);
  } else if (item instanceof Collection) {
    this.items = this.items.concat(Collection.prototype.values.call(item));
  }
  else this.items.push(item);


};
Collection.prototype.values = function () {
  return this.items;
};
Collection.prototype.at = function (pos) {

  if (pos > 0) {
    if (this.items[pos - 1] != undefined) {
      return this.items[pos - 1]
    } else return null;


  } else return null;


};
Collection.prototype.removeAt = function (pos) {
  if (pos > 0) {
    var s = this.items.splice(pos - 1, 1);
    if (s.length === 0) {
      return false;
    } else return true;
  }
  else {
    return false;
  }

};
Collection.prototype.count = function () {
  return this.items.length;
};

// другие методы


/**
 * Создание коллекции из массива значений
 */
Collection.from = function (item) {
  var col = new Collection();
  col.append(item);
  return col;
};
