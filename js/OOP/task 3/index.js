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

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(word, description) {
    super.add(word, description);
    this.words[word]["isDifficult"] = true;
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
