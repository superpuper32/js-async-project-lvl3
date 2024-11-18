import { URL } from 'url';
import path from 'path';

const curDirectory = process.cwd();
const getPath = (fp, filename) => path.join(curDirectory, fp, filename);

function getName(url) {
  const { host, pathname } = new URL(url);
  const newHost = host.split('.');
  const newPathname = pathname.split('/').filter((item) => item !== '');

  return `${[...newHost, ...newPathname].join('-')}.html`;
}

export {
  getName,
  getPath,
};
