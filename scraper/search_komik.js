const cheerio = require('cheerio');
const axios = require('axios');

module.exports = async function searchKomik(search, page = 1) {
  search = search.replace(' ', '+');
  const baseUrl = `https://komikcast.com/page/${page}/?s=${search}`;
  const listOfKomik = [];
  try {
    await axios.get(baseUrl).then((response) => {
      const $ = cheerio.load(response.data);
      const data = $('.listupd').children();
      data.each((_index, element) => {
        const komik = {};
        const $element = $(element);
        komik.title = $element.find('.tt').text().trim();
        komik.thumb = $element.find('.bsx img').attr('src');
        komik.type = $element.find('.bsx span').text().trim();
        komik.chapter = $element.find('.epxs a:nth-child(2)').text().trim();
        komik.rating = $element.find('.rating i').text().trim();
        komik.komikUrl = $element.find('.bsx a').attr('href');
        komik.chapterUrl = $element.find('.epxs a:nth-child(2)').attr('href');
        listOfKomik.push(komik);
      });
    });
  } catch (e) {
    return {
      status: e.response.status,
      message: e.response.statusText,
    };
  }
  return listOfKomik;
};
