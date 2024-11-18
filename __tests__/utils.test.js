import path from 'path';
import { getName, getPath } from '../src/utils.js';

test('getName cases', () => {
  expect(getName('https://ru.hexlet.io/courses')).toBe('ru-hexlet-io-courses.html');
  expect(getName('https://api.github.com/licenses/mit')).toBe('api-github-com-licenses-mit.html');
});

test('getPath cases', () => {
  const fp = '/home/user/current-dir';
  const fn = 'ru-hexlet-io-courses.html';
  const curDirectory = process.cwd();
  const expected = path.join(curDirectory, fp, fn);

  expect(getPath(fp, fn)).toBe(expected);
});
