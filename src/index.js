import fsp from 'fs/promises';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';

import { getFilenameFromUrl, getPath } from './utils.js';

const pageLoader = (url, dir) => {
  const projectFolder = getPath(dir);

  const filename = getFilenameFromUrl(url, '.html');
  const filepath = getPath(dir, filename);

  const assetsName = getFilenameFromUrl(url, '_files');
  const assetsPath = getPath(dir, assetsName);

  // > make resources dir
  // >> const imgUrl = ''; // cheerio find
  // -> get src [img] from html
  // --> get img
  // ---> buildName [name] from src
  // ----> save img
  // --->
  // ------> select tags
  // -------> rename file
  // ----->

  return axios.get(url)
    .then((res) => fsp.mkdir(projectFolder, { recursive: true })
      .then(() => res))
    .then((res) => fsp.writeFile(filepath, res.data)
      .then(() => res))
    .then((response) => fsp.mkdir(assetsPath, { recursive: true })
      .then(() => response))
    .then((res) => {
      const $ = cheerio.load(res.data);
      const $img = $('img');
      const imgs = $img.toArray().map((link) => link.attribs.src);

      const imgUrl = new URL(imgs[0], url);

      return { imgUrl, imgName: getFilenameFromUrl(imgUrl.href, '') };
    })
    .then(({ imgUrl, imgName }) => {
      axios.get(imgUrl, { responseType: 'arraybuffer' })
        .then(({ data }) => fsp.writeFile(path.join(assetsPath, imgName), data));
    })
    .then(() => filepath)
    .catch(console.log)
    .finally(() => console.log(`open ${filepath}`));
};

export default pageLoader;
