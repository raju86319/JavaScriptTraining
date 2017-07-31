function countWords(stringToCountWords) {
    return stringToCountWords.trim().length === 0 ? stringToCountWords.trim().length : stringToCountWords.trim().replace(/\s+/g, ' ').split(' ').length;
}
