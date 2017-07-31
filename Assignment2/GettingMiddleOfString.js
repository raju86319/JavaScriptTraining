function getMiddle(fullString) {
  return fullString.length % 2 ? fullString.substr(fullString.length / 2, 1) : fullString.substr((fullString.length / 2) - 1, 2);
}