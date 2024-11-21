import fsp from 'fs/promises';
import axios from 'axios';

import { getName, getPath } from './utils.js';

const pageLoader = (url, filepath = '/home/user/current-dir') => {
  const dirPath = getPath(filepath, '');
  const name = getName(url);
  const filePath = getPath(filepath, name);

  return axios.get(url)
    .then((res) => {
      fsp.mkdir(dirPath, { recursive: true });
      return res;
    })
    .then((res) => fsp.writeFile(filePath, res.data))
    .catch(console.log)
    .finally(() => console.log(`open ${dirPath}`));
};

export default pageLoader;
