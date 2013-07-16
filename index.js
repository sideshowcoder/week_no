var firstMonday = new Date(1970, 0, 5).getTime()

Date.prototype.weekNo = function() {
  var _date = new Date(this)
  _date.setHours(0,0,0,0)

  // get monday
  _date.setDate(_date.getDate() - (_date.getDay() || 7))

  // calculate full weeks to nearest Thursday
  var weekNo = Math.ceil((((_date - firstMonday) / 86400000) + 1) / 7)

  // Return array of year and week number
  return weekNo
}

Date.prototype.weekNoRelative = function() {
  return this.weekNo() % 52
}
