class Dictionary {
  #name;
  #words;
  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  get mainName() {
    return this.#name;
  }

  get allWords() {
    return this.#words;
  }

  set mainName(name) {
    this.#name = name;
  }

  _addNewWord(wordKey, wordObj) {
    this.#words[wordKey] = wordObj;
  }

  add(word, description, isDifficult = false) {
    if (!this.#words.hasOwnProperty(word)) {
      this._addNewWord(word, { word, description, isDifficult });
    }
  }

  remove(word) {
    delete this.#words[word];
  }

  showAllWords() {
    for (const word in this.words) {
      const { word: txt, description } = this.words[word];
      console.log(`${txt} - ${description}`);
    }
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(word, description) {
    super.add(word, description, true);
  }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант
