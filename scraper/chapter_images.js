const cheerio = require('cheerio');
const axios = require('axios');

module.exports = async function chapterImages(url) {
  const komik = {};
  const img = [];
  try {
    await axios.get(url).then((response) => {
      const $ = cheerio.load(response.data);
      const data = $('.maincontent');
      komik.now = url;
      komik.previous =
        data.find('.nextprev > a:contains("Previous Chapter")').attr('href') ||
        '';
      komik.next =
        data.find('.nextprev > a:contains("Next Chapter")').attr('href') || '';
      data.find('#readerarea img').each((_index, element) => {
        const $img = $(element);
        if ($img.attr('src') !== '') img.push($img.attr('src'));
      });
      komik.images = img;
    });
  } catch (e) {
    return {
      status: e.response.status,
      message: e.response.statusText,
    };
  }
  return komik;
};
