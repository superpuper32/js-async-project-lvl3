import { fileURLToPath } from 'url';
import os from 'os';
import path from 'path';
import fs from 'fs/promises';
import nock from 'nock';

import pageLoader from '../src/index.js';

nock.disableNetConnect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

const srcFilename = 'before.html';
const imgFilename = 'nodejs.png';

let data;
let img;
let tempDir;

beforeAll(async () => {
  data = await fs.readFile(getFixturePath(srcFilename), 'utf8');
  img = await fs.readFile(getFixturePath(imgFilename), 'utf8');
});

beforeEach(async () => {
  tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
});

it('pageLoader main logic', async () => {
  const scope = nock(/ru\.hexlet\.io/)
    .get('/courses')
    .reply(200, data)
    .get('/assets/professions/nodejs.png')
    .reply(200, img);

  const pagePath = await pageLoader('https://ru.hexlet.io/courses', tempDir);

  const actual = await fs.readFile(pagePath, { encoding: 'utf8' });

  expect(scope.isDone()).toBe(true);
  expect(actual).toBe(data);
});
