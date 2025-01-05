import path from 'path';

import { getFilenameFromUrl, getPath } from '../src/utils.js';

test('getFilenameFromUrl cases', () => {
  expect(getFilenameFromUrl('https://ru.hexlet.io/courses', '.html')).toBe('ru-hexlet-io-courses.html');
  expect(getFilenameFromUrl('https://api.github.com/licenses/mit', '.html')).toBe('api-github-com-licenses-mit.html');
  expect(getFilenameFromUrl('https://ru.hexlet.io/courses', '-files')).toBe('ru-hexlet-io-courses-files');
});

test('getPath cases', () => {
  const fp = '/home/user/current-dir';
  const fn = 'ru-hexlet-io-courses.html';
  const curDirectory = process.cwd();
  const expected = path.resolve(curDirectory, fp, fn);

  expect(getPath(fp, fn)).toBe(expected);
});
