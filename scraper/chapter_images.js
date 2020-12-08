const cheerio = require('cheerio');
const axios = require('axios');

module.exports = async function chapterImages(url) {
  const img = [];
  try {
    await axios.get(url).then((response) => {
      const $ = cheerio.load(response.data);
      const data = $('#readerarea img');
      data.each((_index, element) => {
        const $img = $(element);
        if ($img.attr('src') !== '') img.push($img.attr('src'));
      });
    });
  } catch (e) {
    return {
      status: e.response.status,
      message: e.response.statusText,
    };
  }
  return { images: img };
};
