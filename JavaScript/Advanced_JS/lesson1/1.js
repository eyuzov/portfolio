const music = [
  { title: "album1", artist: "artist", year: 2000 },
  { title: "album2", artist: "artist", year: 2001 },
  { title: "album3", artist: "artist", year: 2002 },
];

const musicCollection = {
  music: [...music],
  [Symbol.iterator]: function () {
    let countAlbums = 0;
    return {
      next: () => {
        if (countAlbums >= this.music.length) {
          return { done: true };
        } else {
          return {
            value: this.music[countAlbums++],
            done: false,
          };
        }
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist}(${album.year})`);
}

// Задание 1

// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)
