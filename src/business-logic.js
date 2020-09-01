export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

// Create Entry objects that include a method to return the number of words in the entry.

Entry.prototype.wordCount = function () {
  let arrOfWords = this.body.split(" ");
  let wordCount = arrOfWords.length;
  return wordCount;
};

// Then, add a separate method (or methods) to return the number of vowels and consonants in each entry. 
// Entry.prototype.getVowels

// Finally, add a method called getTeaser to return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words.