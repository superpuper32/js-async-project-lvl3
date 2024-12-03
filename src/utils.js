import { URL } from 'url';
import path from 'path';

const currenrtDir = process.cwd();
const getPath = (filepath, filename = '') => path.join(currenrtDir, filepath, filename);

function getFilenameFromUrl(url, supplement) {
  const { host, pathname } = new URL(url);

  const fileHost = host.split('.');
  const filePathname = pathname.split('/').filter((item) => item !== '');

  return `${[...fileHost, ...filePathname].join('-')}${supplement}`;
}

export {
  getFilenameFromUrl,
  getPath,
};
