class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    if (!this.words.hasOwnProperty(word)) {
      this.words[word] = { word, description };
    }
  }

  remove(word) {
    delete this.words[word];
  }
  get(word) {
    return this.words[word];
  }

  showAllWords() {
    for (const word in this.words) {
      const { word: txt, description } = this.words[word];
      console.log(`${txt} - ${description}`);
    }
  }
}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
console.log(dictionary);
dictionary.add(
  "Веб-разработчик",
  "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);
// console.log(dictionary);
dictionary.remove("JavaScript");
// console.log(dictionary);
dictionary.showAllWords();

console.log(dictionary);
