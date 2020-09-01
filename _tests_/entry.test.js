import {Entry} from './../src/business-logic.js'

describe('Entry', () => {
  let reusableEntry;
  beforeEach(() => {
    reusableEntry = new Entry('Greetings', 'Hi, there!');
  });

  test('should correctly create an entry object with a title and body', () => {
    // const entry = new Entry('Greetings', 'Hi, there!');
    expect(reusableEntry.title).toEqual('Greetings');
    expect(reusableEntry.body).toEqual('Hi, there!');
  });

  test('should return the number of words in the entry', () => {
    // const entry = new Entry('Greetings', 'Hi there!');
    expect(reusableEntry.wordCount()).toEqual(2);
  });

  // test('should return the number of vowels and consonants in the entry', () => {
  //   const entry = new Entry('Greetings', 'Hi there!');
  //   expect(entry.vowelConsonantCount()).toEqual("Vowels: 3, Consonants:4");
  // });
});