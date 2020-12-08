const cheerio = require('cheerio');
const axios = require('axios');

module.exports = async function detailKomik(url) {
  const komik = {};
  try {
    await axios.get(url).then((response) => {
      const $ = cheerio.load(response.data);
      const data = $('#content');
      function filterData(filter) {
        return data
          .find(`span:contains("${filter}")`)
          .text()
          .replace(`${filter}:`, '')
          .trim();
      }
      komik.title = data.find('h1').text().trim();
      komik.thumb = data.find('.thumb img').attr('src');
      komik.sinopsis = data.find('.desc p').text().replace(/\n/g, '');
      komik.rating = data
        .find('.rating strong')
        .text()
        .replace('Rating', '')
        .trim();
      komik.genres = filterData('Genres');
      komik.type = filterData('Type');
      komik.updateOn = filterData('Updated on');
      komik.status = filterData('Status');
      komik.released = filterData('Released');
      komik.author = filterData('Author');
      komik.totalChapter = filterData('Total Chapter');
      const allChapter = [];
      data.find('.cl ul li').each((_i, element) => {
        const $element = $(element);
        const chapter = {};
        chapter.name = $element.find('.leftoff').text();
        chapter.date = $element.find('.rightoff').text();
        chapter.url = $element.find('.leftoff a').attr('href');
        allChapter.push(chapter);
      });
      komik.chapters = allChapter;
    });
  } catch (e) {
    return {
      status: e.response.status,
      message: e.response.statusText,
    };
  }
  return komik;
};
