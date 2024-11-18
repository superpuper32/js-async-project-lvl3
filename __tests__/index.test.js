import { fileURLToPath } from 'url';
import os from 'os';
import path from 'path';
import fsp from 'fs/promises';
import nock from 'nock';
import { afterAll } from '@jest/globals';

import pageLoader from '../src/index.js';

nock.disableNetConnect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '../__fixtures__/', filename);

const srcFilename = 'index.html';
const destFilename = 'ru-hexlet-io-courses.html';

const src = getFixturePath(srcFilename);

let data;

beforeAll(async () => {
  data = await fsp.readFile(getFixturePath(src), { encoding: 'utf8' });
});

afterAll(async () => {
  fsp.rm(getFixturePath(destFilename));
});

test('pageLoader', async () => {
  const scope = nock('https://ru.hexlet.io')
    .get('/courses')
    .reply(200, data);

  await pageLoader('https://ru.hexlet.io/courses', '__fixtures__');

  const actual = await fsp.readFile(getFixturePath(destFilename), { encoding: 'utf8' });

  expect(true).toBe(true);
  expect(scope.isDone()).toBe(true);
  expect(actual).toBe(data);
});
