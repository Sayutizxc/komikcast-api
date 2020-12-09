# Komikcast API

| Url                   | Param           | Type           |
| --------------------- | --------------- | -------------- |
| /                     | {page}          | Number         |
| /list-komik           | -               | -              |
| /detail/komik         | url             | url            |
| /detail/komik/chapter | url             | url            |
| /search               | keyword, {page} | String, Number |

---

- daftar komik terbaru

```http
  http://127.0.0.1:3000/
  http://127.0.0.1:3000/{page}
  http://127.0.0.1:3000/2
```

- daftar semua komik yang ada

```http
  http://127.0.0.1:3000/list-komik
```

- detail komik

```http
  http://127.0.0.1:3000/detail/komik?url={url}
  http://127.0.0.1:3000/detail/komik?url=https://komikcast.com/komik/magic-emperor/
```

- semua foto pada chapter yang dicari

```http
  http://127.0.0.1:3000/detail/komik/chapter?url={url}
  http://127.0.0.1:3000/detail/komik/chapter?url=https://komikcast.com/chapter/magic-emperor-chapter-148-bahasa-indonesia/
```

- pencarian

```http
  http://127.0.0.1:3000/search?keyword={keyword}
  http://127.0.0.1:3000/search?keyword={keyword}&page={page}
  http://127.0.0.1:3000/search?keyword=Magic emperor
  http://127.0.0.1:3000/search?keyword=Magic&page=2
```

Contoh response dari detail komik

```Json
{
  "title": "The Strongest Haunted House and the Guy With No Spiritual Sense Bahasa Indonesia",
  "thumb": "https://komikcast.com/wp-content/uploads/2020/11/das21ewdsa-e1604723124344.jpg",
  "sinopsis": "Pada hari terakhir sebelum seorang pria yang tidak bisa merasakan roh sama sekali keluar dari rumahnya yang seharusnya berhantu, Kinako-sama, roh terkuat yang memproklamirkan diri di bumi, akan mencoba yang terbaik untuk menakut-nakuti untuk hidup di neraka. pria sebelum dia pergi untuk selamanya.",
  "rating": "7.90",
  "genres": "Comedy, Horror",
  "type": "Manga",
  "updateOn": "December 8, 2020",
  "status": "Ongoing",
  "released": "2020",
  "author": "池田恵介",
  "totalChapter": "?",
  "chapters": [
    {
      "name": "Chapter 05.5",
      "date": "12 hours ago",
      "url": "https://komikcast.com/chapter/the-strongest-haunted-house-and-the-guy-with-no-spiritual-sense-chapter-05-5-bahasa-indonesia/"
    },
    {
      "name": "Chapter 05",
      "date": "22 hours ago",
      "url": "https://komikcast.com/chapter/the-strongest-haunted-house-and-the-guy-with-no-spiritual-sense-chapter-05-bahasa-indonesia/"
    },
    {
      "name": "Chapter 04",
      "date": "4 weeks ago",
      "url": "https://komikcast.com/chapter/the-strongest-haunted-house-and-the-guy-with-no-spiritual-sense-chapter-04-bahasa-indonesia/"
    },
    {
      "name": "Chapter 03",
      "date": "4 weeks ago",
      "url": "https://komikcast.com/chapter/the-strongest-haunted-house-and-the-guy-with-no-spiritual-sense-chapter-03-bahasa-indonesia/"
    },
    {
      "name": "Chapter 02",
      "date": "1 month ago",
      "url": "https://komikcast.com/chapter/the-strongest-haunted-house-and-the-guy-with-no-spiritual-sense-chapter-02-bahasa-indonesia/"
    },
    {
      "name": "Chapter 01",
      "date": "1 month ago",
      "url": "https://komikcast.com/chapter/the-strongest-haunted-house-and-the-guy-with-no-spiritual-sense-chapter-01-bahasa-indonesia/"
    }
  ]
}
```
