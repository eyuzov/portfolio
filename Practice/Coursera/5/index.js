/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
  arr = [];
  hashtags.filter(filt);

  function filt(i) {
    if (arr.indexOf(i.toLowerCase()) === -1) {
      arr.push(i.toLowerCase());
    }

  }

  return arr.join(", ");

};
