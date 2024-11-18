import fsp from 'fs/promises';
import axios from 'axios';

import { getName, getPath } from './utils.js';

const pageLoader = async (url, filepath = '/home/user/current-dir') => {
  const response = await axios.get(url);

  const name = getName(url);

  const dirPath = getPath(filepath, '');
  const filePath = getPath(filepath, name);

  await fsp.mkdir(dirPath, { recursive: true });
  await fsp.writeFile(filePath, response.data);
};

export default pageLoader;
