/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  var newHours, newMinutes, tmpH, tmpM;
  if (minutes + interval < 60) {
    tmpH = 0;
    tmpM = minutes + interval;
    tmpM = tmpM < 10 ? "0" + tmpM : tmpM;
  } else if (minutes + interval === 60) {
    tmpH = 1;
    tmpM = 0 + "0";
  } else {
    tmpH = Math.floor((minutes + interval) / 60);

    tmpM = (minutes + interval) % 60;
    tmpM = tmpM < 10 ? "0" + tmpM : tmpM;
  }
  newHours = hours + tmpH;
  newMinutes = tmpM;
  if (newHours > 23) {
    newHours = newHours - (24 * Math.floor(newHours/24));
  }
  if (newHours < 10) {
    newHours = "0" + newHours;
  }
  return newHours + ":" + newMinutes;
};
