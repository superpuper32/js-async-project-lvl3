import fsp from 'fs/promises';
import axios from 'axios';

import { getFilenameFromUrl, getPath } from './utils.js';

const pageLoader = (url, dir) => {
  const projectFolder = getPath(dir);

  const filename = getFilenameFromUrl(url, '.html');
  const filepath = getPath(dir, filename);

  return axios.get(url)
    .then((res) => fsp.mkdir(projectFolder, { recursive: true })
      .then(() => res))
    .then((res) => fsp.writeFile(filepath, res.data)
      .then(() => filepath))
    .catch(console.log)
    .finally(() => console.log(`open ${filepath}`));
};

export default pageLoader;
