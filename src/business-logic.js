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
Entry.prototype.vowelConsonantCount = function () {
  let vowels = 0;
  let consonants = 0;
  // get an array with only letters - get rid of white space and non-alphanumeric characters
  let lettersString = this.body.replace(/[\s\d\W] -gi/, "");
  for (let letter of lettersString){
    if (letter === /[a,e,i,o,u] -i/){
      vowels += 1;
    } else {
      consonants += 1;
    };
  };
  return ("Vowels: " + vowels + ", Consonants: " + consonants);
};

// Finally, add a method called getTeaser to return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words.

// Entry.prototype.getTeaser = {
//   let teaser;
//   let bodyClone = this.body.slice();
//   // Find the index of the first period (using IndexOf)
//   let firstPeriodIndex = this.body.indexOf(".");
//   // Create new string that ends just before that period
//   let firstSentence = bodyClone.slice(0, firstPeriodIndex);
//    // Change new string into an array by the word
//   let firstSentenceArray = firstSentence.split(" ");
//   // if the array length is more than 8 words, only display those 8 words
//   if (firstSentenceArray.length <= 8) {
//     let teaser = firstSentenceArray.join(" ");
//   } else {
//     let teaser = firstSentenceArray[0];
//     for (for i=1; i<7; i++) {
//       teaser.concat(" " + firstSentenceArray[i]);
//     };
//   };
//   return teaser;
// };