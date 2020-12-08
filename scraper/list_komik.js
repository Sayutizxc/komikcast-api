const cheerio = require('cheerio');
const axios = require('axios');

module.exports = async function listKomik() {
  const baseUrl = 'https://komikcast.com/daftar-komik/?list';
  const daftarKomik = [];
  try {
    await axios.get(baseUrl).then((response) => {
      const $ = cheerio.load(response.data);
      const data = $('.soralist .blix');
      data.find('ul li').each((_index, element) => {
        const $element = $(element);
        const list = {};
        list.nama = $element.find('a').text().trim();
        list.url = $element.find('a').attr('href');
        daftarKomik.push(list);
      });
    });
  } catch (e) {
    return {
      status: e.response.status,
      message: e.response.statusText,
    };
  }
  return daftarKomik;
};
