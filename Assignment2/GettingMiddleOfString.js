function getMiddle(stringToGetMiddle) {
  return stringToGetMiddle.length % 2 ? stringToGetMiddle.substr(stringToGetMiddle.length / 2, 1) : stringToGetMiddle.substr((stringToGetMiddle.length / 2) - 1, 2);
}