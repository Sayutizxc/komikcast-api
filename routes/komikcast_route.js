/* eslint-disable no-unused-vars */
const latestUpdate = require('../scraper/latest_update.js');
const listKomik = require('../scraper/list_komik.js');
const detailKomik = require('../scraper/detail_komik.js');
const chapterImages = require('../scraper/chapter_images.js');
const searchKomik = require('../scraper/search_komik.js');

module.exports = async (fastify, _options) => {
  fastify.get('/:page', async (request, _reply) => {
    const data = await latestUpdate(request.params.page);
    return data;
  });
  fastify.get('/list-komik', async (_request, _reply) => {
    const data = await listKomik();
    return data;
  });
  fastify.get('/detail/komik', async (request, _reply) => {
    const data = await detailKomik(request.query.url);
    return data;
  });
  fastify.get('/detail/komik/chapter', async (request, _reply) => {
    const data = await chapterImages(request.query.url);
    return data;
  });
  fastify.get('/search', async (request, _reply) => {
    const data = await searchKomik(request.query.keyword, request.query.page);
    return data;
  });
};
